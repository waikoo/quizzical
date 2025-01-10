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
  <div class="text-[#E6DEB6] grid gap-4 md:grid-cols-2">
    <button
      class="p-2 rounded-full settingsButton"
      data-difficulty="any"
      data-name="difficulty"
      class:selected={$currentDifficulty === null}
      onclick={category.buildUrl}
    >
      <div class="rounded-full bg-[#180f05] text-[1.063px] md:text-[1.438rem]">
        Any
      </div>
    </button>

    {#each category.values as difficulty}
      <button
        class="p-2 rounded-full settingsButton"
        data-difficulty={difficulty.toLowerCase()}
        data-name="difficulty"
        class:selected={$currentDifficulty === difficulty}
        onclick={category.buildUrl}
      >
        <div
          class="rounded-full bg-[#180f05] text-[1.063px] md:text-[1.438rem]"
        >
          {difficulty}
        </div>
      </button>
    {/each}
  </div>
</SettingsCard>
