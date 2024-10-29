<script lang="ts">
  import End from "./components/End.svelte";
  import Game from "./components/Game.svelte";
  import Settings from "./components/Settings.svelte";
  import ThemeToggler from "./components/ThemeToggler.svelte";
  import { url, gameState, baseUrl, gameSpeed } from "./stores";
  import type { TriviaQuestion } from "./type";
  import fetchQuestions from "./utils/fetchQuestions";

  let gameQuestions = $state<TriviaQuestion[]>([]);
  let isFetchingError = $state<boolean>(false);

  $effect(() => {
    if ($url !== baseUrl && $gameState === "fetching") {
      (async () => {
        gameQuestions = await fetchQuestions($url);

        if ((gameQuestions as TriviaQuestion[]).length > 0) {
          gameState.set("playing");
        } else {
          isFetchingError = true;
        }
      })();
    }
  });
</script>

<main class="">
  <div class="flex justify-between p-2">
    <a href="/" class="text-center">Quizzical</a>
    <ThemeToggler />
  </div>

  {#if $gameState === "settings"}
    <Settings {url} {gameSpeed} />
  {:else if $gameState === "playing"}
    <Game {gameQuestions} {gameSpeed} />
  {:else if $gameState === "end"}
    <End />
  {:else}
    {null}
  {/if}
</main>

<style>
</style>
