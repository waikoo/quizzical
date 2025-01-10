<script lang="ts">
  import { derived } from "svelte/store";
  import { url } from "../stores";
  import type { TSettings } from "../type";
  import SettingsCard from "./SettingsCard.svelte";

  const { category }: { category: TSettings<string> } = $props();

  const currentDifficulty = derived(url, ($url) => {
    const urlObj = new URL($url);
    return urlObj.searchParams.get("difficulty");
  });
</script>

<SettingsCard {category}>
  <div class="text-[#E6DEB6] grid gap-4">
    <button
      class="p-2 rounded-full"
      data-difficulty="any"
      data-name="difficulty"
      class:selected={$currentDifficulty === null}
      onclick={category.buildUrl}
    >
      <div class="rounded-full bg-[#180f05]">Any</div>
    </button>

    {#each category.values as difficulty}
      <button
        class="p-2 rounded-full"
        data-difficulty={difficulty.toLowerCase()}
        data-name="difficulty"
        class:selected={$currentDifficulty === difficulty}
        onclick={category.buildUrl}
      >
        <div class="rounded-full bg-[#180f05]">
          {difficulty}
        </div>
      </button>
    {/each}
  </div>
</SettingsCard>

<style>
  button {
    background: linear-gradient(#2b2b2b, black);
    padding: 2px;
    box-shadow: -3px -3px 10px -3px #3e2528;
    text-transform: uppercase;
    font-family: "Anton", sans-serif;
  }

  button div {
    box-shadow: 4px 4px 20px black;
    padding: 10px 10px;
  }
</style>
