<script lang="ts">
  import { get, type Writable } from "svelte/store";
  import CategorySettings from "./CategorySettings.svelte";
  import QuestionSettings from "./QuestionSettings.svelte";
  import DifficultySettings from "./DifficultySettings.svelte";
  import TypeSettings from "./TypeSettings.svelte";
  import { gameState, type GameSpeed } from "../stores";
  import TimerSettings from "./TimerSettings.svelte";

  let {
    url,
    gameSpeed,
  }: { url: Writable<string>; gameSpeed: Writable<GameSpeed> } = $props();
  type UrlKey = "category" | "amount" | "difficulty" | "type";
  type UrlValue = number | string;

  const buildUrl = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const name = target.dataset.name as UrlKey;
    const value = target.dataset[name as UrlValue] as UrlValue;

    const urlValue = get(url);
    const newUrl = new URL(urlValue);
    if (value !== "any") {
      newUrl.searchParams.set(name, value.toString());
    } else {
      newUrl.searchParams.delete(name);
    }
    url.set(newUrl.toString());
  };

  function startGame() {
    $gameState = "fetching";
  }
</script>

<h1 class="">Welcome to Quizzical!</h1>

<TimerSettings {gameSpeed} />
<QuestionSettings addSetting={buildUrl} />
<CategorySettings addSetting={buildUrl} />
<DifficultySettings addSetting={buildUrl} />
<TypeSettings addSetting={buildUrl} />
<div>{$url}</div>
<div>{$gameSpeed}</div>

<button class="block border-[1px] border-gray-300 p-2" onclick={startGame}
  >Start Game</button
>

{#if $gameState === "fetching"}
  <span class="text-red-300 relative z-2">Loading questions...</span>
{/if}
