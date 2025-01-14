<script lang="ts">
  import { derived } from "svelte/store";

  import { url } from "../stores";
  import type { TSettings } from "../type";
  import SettingsCard from "./SettingsCard.svelte";

  const { category }: { category: TSettings<number> } = $props();

  const currentAmount = derived(url, ($url) => {
    const urlObj = new URL($url);
    return urlObj.searchParams.get("amount");
  });
</script>

<SettingsCard {category}>
  <div class="grid gap-6 text-[#E6DEB6] md:grid-cols-3">
    {#each category.values as nrOfquestions}
      <button
        class="p-[3px] font-['Anton'] bg-gradient-to-b from-[#2b2b2b] to-[black] uppercase rounded-full settingsButton text-[1.375rem] md:text-[1.438rem] shadow-[-3px_-3px_20px_-3px_#3E2528]"
        class:selected={$currentAmount === nrOfquestions.toString()}
        data-name="amount"
        data-amount={nrOfquestions}
        onclick={category.buildUrl}
      >
        <div
          class="rounded-full py-[4px] bg-[#180f05] hover:bg-[#19151D] transition-colors flex justify-center items-center"
        >
          {nrOfquestions}
        </div>
      </button>
    {/each}
  </div>
</SettingsCard>

<style>
</style>
