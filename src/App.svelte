<script lang="ts">
  import { url, gameState, baseUrl, gameSpeed, gamePoints } from "./stores";
  import End from "./components/End.svelte";
  import Game from "./components/Game.svelte";
  import Settings from "./components/Settings.svelte";
  import Greeting from "./components/Greeting.svelte";
  import Loader from "./components/Loader.svelte";
  import Header from "./components/Header.svelte";
  import addUuids from "./utils/addUuids";
  import fetchQuestions from "./utils/fetchQuestions";
  import numberQuestions from "./utils/numberQuestions";
  import type { TriviaQuestionWithUuid } from "./type";
  import "./app.css";

  let gameQuestions = $state<TriviaQuestionWithUuid[]>([]);
  let noQuestionsMatchSettings = $state<boolean>(false);
  let hasFetchedQuestions = false;

  const closePopup = () => {
    noQuestionsMatchSettings = false;
  };

  $effect(() => {
    if ($gameState === "fetching" && !hasFetchedQuestions) {
      hasFetchedQuestions = true;
      (async () => {
        try {
          gameQuestions = numberQuestions(addUuids(await fetchQuestions($url)));

          if (gameQuestions.length === 0) {
            noQuestionsMatchSettings = true;
            $gameState = "settings";
          } else {
            $gameState = "playing";
          }
        } catch (error) {
          noQuestionsMatchSettings = true;
        }
        hasFetchedQuestions = false;
      })();
    }
  });

  $effect(() => {
    // avoids overstretching the svg bg
    if (["greeting", "setting", "end", "playing"].includes($gameState)) {
      document.body.style.backgroundAttachment = "fixed";
    }
  });

  const getOverflowStyle = () => {
    if (window.matchMedia("(min-width: 1280px)").matches) {
      if ($gameState === "greeting") return "overflow-y-hidden";
      if ($gameState === "settings") return "overflow-y-scroll";
    } else {
      if ($gameState === "end") return "overflow-y-hidden";
      if ($gameState === "greeting") return "overflow-y-hidden";
      return "overflow-y-scroll";
    }
  };
</script>

{#if $gameState !== "greeting"}
  <Header />
{/if}
<main
  class={`${getOverflowStyle()} fixed inset-0 margin-auto grid place-items-center`}
>
  {#if $gameState === "greeting"}
    <Greeting />
  {:else if $gameState === "settings"}
    <Settings {url} {noQuestionsMatchSettings} {closePopup} />
  {:else if $gameState === "fetching"}
    <div class="grid place-items-center h-screen">
      <Loader />
    </div>
  {:else if $gameState === "playing"}
    <Game {gameQuestions} {gameSpeed} {gameState} {gamePoints} />
  {:else if $gameState === "end"}
    <End questionLength={gameQuestions.length} {gamePoints} {gameState} {url} />
  {:else}
    {null}
  {/if}
</main>
