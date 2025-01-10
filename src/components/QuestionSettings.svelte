<script lang="ts">
  import { url } from "../stores";
  import type { TSettings } from "../type";
  import SettingsCard from "./SettingsCard.svelte";
  import { derived } from "svelte/store";

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
        class="p-2 rounded-full settingsButton text-[1.375rem] md:text-[1.75rem]"
        class:selected={$currentAmount === nrOfquestions.toString()}
        data-name="amount"
        data-amount={nrOfquestions}
        onclick={category.buildUrl}
      >
        <div class="rounded-full bg-[#180f05]">{nrOfquestions}</div>
      </button>
    {/each}
  </div>
</SettingsCard>

<style>
</style>
