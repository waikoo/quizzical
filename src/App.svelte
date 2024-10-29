<script lang="ts">
  import End from "./components/End.svelte";
  import Game from "./components/Game.svelte";
  import Settings from "./components/Settings.svelte";
  import { url, gameState } from "./stores";
  import type { TriviaQuestion } from "./type";

  const baseUrl = "https://opentdb.com/api.php?";
  let gameQuestions = $state<TriviaQuestion[]>([]);
  let isFetchingError = $state<boolean>(false);

  const fetchQuestions = async (url: string): Promise<TriviaQuestion[]> => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching questions:", error);
      isFetchingError = true;
    }
    return [];
  };

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
  <a href="/" class="text-center">Quizzical</a>
  {#if $gameState === "settings"}
    <Settings {url} />
  {:else if $gameState === "playing"}
    <Game {gameQuestions} />
  {:else if $gameState === "end"}
    <End />
  {:else}
    {null}
  {/if}
</main>

<style>
</style>
