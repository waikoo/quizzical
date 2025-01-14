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
          if ($url === baseUrl) {
            // play with a default of 10 questions & of multiple choice
            $url = "https://opentdb.com/api.php?amount=10&type=multiple";
          }
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
    if ($gameState === "settings") {
      document.body.style.backgroundAttachment = "fixed";
    }
    if ($gameState === "playing") {
      document.body.style.overflow = "hidden";
    }
  });
</script>

<Header />
<main>
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
