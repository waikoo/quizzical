<script lang="ts">
  import { url } from "../stores";
  import type { TCategory, TSettings } from "../type";
  import SettingsCard from "./SettingsCard.svelte";
  import { derived } from "svelte/store";

  const { category }: { category: TSettings<TCategory> } = $props();

  const currentCategory = derived(url, ($url) => {
    const urlObj = new URL($url);
    return urlObj.searchParams.get("category");
  });
</script>

<SettingsCard {category}>
  <div class="text-[#E6DEB6] flex flex-wrap gap-3 justify-center">
    <button
      class="p-2 rounded-full"
      data-name="category"
      data-category="any"
      class:selected={$currentCategory === null}
      onclick={category.buildUrl}
    >
      <div class="rounded-full bg-[#180f05]">Any</div>
    </button>

    {#each category.values as categoryVal}
      <button
        class="p-4 rounded-full"
        data-category={categoryVal.id}
        data-name="category"
        class:selected={$currentCategory === categoryVal.id.toString()}
        onclick={category.buildUrl}
      >
        <div class="rounded-full bg-[#180f05] p-4">
          {categoryVal.name}
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
