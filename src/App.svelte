<script lang="ts">
  import End from "./components/End.svelte";
  import Game from "./components/Game.svelte";
  import Settings from "./components/Settings.svelte";
  import { url, gameState, baseUrl, gameSpeed } from "./stores";
  import type { TriviaQuestion } from "./type";

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

  const setTheme = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    document.documentElement.dataset.theme = target.dataset.theme;
  };
</script>

<main class="">
  <div class="flex justify-between p-2">
    <a href="/" class="text-center">Quizzical</a>
    <div>
      <button data-theme="light" onclick={setTheme}>Light</button>
      <button data-theme="dark" onclick={setTheme}>Dark</button>
    </div>
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
