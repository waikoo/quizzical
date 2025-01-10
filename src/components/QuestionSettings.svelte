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
  <div class="grid gap-6 text-[#E6DEB6]">
    {#each category.values as nrOfquestions}
      <button
        class="p-2 rounded-full"
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
  button {
    background: linear-gradient(#2b2b2b, black);
    padding: 2px;
    box-shadow: -3px -3px 10px -3px #3e2528;
    text-transform: uppercase;
    font-family: "Anton", sans-serif;
  }

  button div {
    box-shadow: 4px 4px 20px black;
    padding: 10px 0;
  }
</style>
