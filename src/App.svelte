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
  let isFetchingError = $state<boolean>(false);
  let hasFetchedQuestions = false;

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
            isFetchingError = true;
          } else {
            $gameState = "playing";
          }
        } catch (error) {
          console.error("Error fetching questions:", error);
          isFetchingError = true;
        }
      })();
    }
  });
</script>

<main>
  {#if $gameState === "greeting"}
    <Greeting />
  {:else if $gameState === "settings"}
    <Settings {url} {gameSpeed} />
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
