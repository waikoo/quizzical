<script lang="ts">
  import End from "./components/End.svelte";
  import Game from "./components/Game.svelte";
  import Settings from "./components/Settings.svelte";
  import { url, gameState, baseUrl, gameSpeed, gamePoints } from "./stores";
  import type { TriviaQuestionWithUuid } from "./type";
  import fetchQuestions from "./utils/fetchQuestions";
  import addUuids from "./utils/addUuids";
  import Greeting from "./components/Greeting.svelte";
  import "./app.css";

  let gameQuestions = $state<TriviaQuestionWithUuid[]>([]);
  let isFetchingError = $state<boolean>(false);

  $effect(() => {
    if ($url !== baseUrl && $gameState === "fetching") {
      (async () => {
        gameQuestions = addUuids(await fetchQuestions($url));
        if (gameQuestions.length === 0) isFetchingError = true;
        if ((gameQuestions as TriviaQuestionWithUuid[]).length > 0) {
          gameState.set("playing");
        } else {
          isFetchingError = true;
        }
      })();
    }
  });
  $inspect(gameQuestions);
</script>

<main class="">
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
