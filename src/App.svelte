<script lang="ts">
  import End from "./components/End.svelte";
  import Game from "./components/Game.svelte";
  import Settings from "./components/Settings.svelte";
  import { url, gameState, baseUrl, gameSpeed, gamePoints } from "./stores";
  import type { TriviaQuestionWithUuid } from "./type";
  import Greeting from "./components/Greeting.svelte";
  import addUuids from "./utils/addUuids";
  import fetchQuestions from "./utils/fetchQuestions";
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
            // play with a default of 10 questions
            $url = "https://opentdb.com/api.php?amount=10";
          }
          gameQuestions = addUuids(await fetchQuestions($url));

          if (gameQuestions.length === 0) {
            noQuestionsMatchSettings = true;
            $gameState = "settings";
            hasFetchedQuestions = false;
          } else {
            $gameState = "playing";
          }
        } catch (error) {
          console.error("Error fetching questions:", error);
          noQuestionsMatchSettings = true;
        }
      })();
    }
  });
</script>

<main>
  {#if $gameState === "greeting"}
    <Greeting />
  {:else if $gameState === "settings"}
    <Settings {url} {noQuestionsMatchSettings} {closePopup} />
  {:else if $gameState === "playing"}
    <Game {gameQuestions} {gameSpeed} {gameState} {gamePoints} />
  {:else if $gameState === "end"}
    <End questionLength={gameQuestions.length} {gamePoints} {gameState} {url} />
  {:else}
    {null}
  {/if}
</main>

<style>
</style>
