<script lang="ts">
  import { get, type Writable } from "svelte/store";
  import { type UrlKey, type UrlValue } from "../utils/setUrl";
  import CategorySettings from "./CategorySettings.svelte";
  import QuestionSettings from "./QuestionSettings.svelte";
  import DifficultySettings from "./DifficultySettings.svelte";
  import TypeSettings from "./TypeSettings.svelte";
  import { gameState } from "../stores";

  let { url }: { url: Writable<string> } = $props();

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

<QuestionSettings addSetting={buildUrl} />
<CategorySettings addSetting={buildUrl} />
<DifficultySettings addSetting={buildUrl} />
<TypeSettings addSetting={buildUrl} />
<span>{$url}</span>

<button class="block border-[1px] border-black p-2" onclick={startGame}
  >Start Game</button
>

{#if $gameState === "fetching"}
  <span>Loading questions...</span>
{/if}
