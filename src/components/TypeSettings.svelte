<script lang="ts">
  import { url } from "../stores";
  import type { TSettings } from "../type";
  import SettingsCard from "./SettingsCard.svelte";
  import { derived } from "svelte/store";

  const { category }: { category: TSettings<string> } = $props();

  const currentType = derived(url, ($url) => {
    const urlObj = new URL($url);
    return urlObj.searchParams.get("type");
  });
</script>

<SettingsCard {category}>
  <div class="text-[#e6deb6] grid gap-4">
    <button
      class="p-2 rounded-full"
      data-type="any"
      data-name="type"
      class:selected={$currentType === null}
      onclick={category.buildUrl}
    >
      <div class="rounded-full bg-[#180f05]">Any</div>
    </button>

    <button
      class="p-2 rounded-full"
      data-type="multiple"
      data-name="type"
      class:selected={$currentType === "multiple"}
      onclick={category.buildUrl}
    >
      <div class="rounded-full bg-[#180f05]">
        {"multiple choice"}
      </div>
    </button>

    <button
      class="p-2 rounded-full"
      data-type="boolean"
      data-name="type"
      class:selected={$currentType === "boolean"}
      onclick={category.buildUrl}
    >
      <div class="rounded-full bg-[#180f05]">
        {"true / false"}
      </div>
    </button>
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

  .selected {
    background: linear-gradient(#e3bf00, black);
    color: #180f05;
  }

  .selected div {
    background: #e3bf00;
  }
</style>
