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

{#snippet difficultyButton(
  difficulty: string,
  selectedCondition: boolean,
  textContent: string,
)}
  <button
    class="p-[3px] font-['Anton'] rounded-full settingsButton bg-gradient-to-b from-[#2b2b2b] to-[black] uppercase shadow-[-3px_-3px_20px_-3px_#3E2528]"
    data-difficulty={difficulty}
    data-name="difficulty"
    class:selected={selectedCondition}
    onclick={category.buildUrl}
  >
    <div
      class="rounded-full py-[4px] bg-[#180f05] xl:hover:bg-[#19151D] text-[1rem] md:text-[1.438rem] flex justify-center items-center"
    >
      {textContent}
    </div>
  </button>
{/snippet}

<SettingsCard {category}>
  <div class="text-[#E6DEB6] grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {@render difficultyButton("any", $currentDifficulty === null, "Any")}

    {#each category.values as difficulty}
      {@render difficultyButton(
        difficulty.toLowerCase(),
        $currentDifficulty === difficulty,
        difficulty,
      )}
    {/each}
  </div>
</SettingsCard>
