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

{#snippet categoryButton(
  selectedCondition: boolean,
  textContent: string,
  dataCategory: string | number,
)}
  <button
    class="p-2 rounded-full settingsButton"
    data-name="category"
    data-category={dataCategory}
    class:selected={selectedCondition}
    onclick={category.buildUrl}
  >
    <div class="rounded-full bg-[#180f05]">{textContent}</div>
  </button>
{/snippet}

<SettingsCard {category}>
  <div
    class="text-[#E6DEB6] flex flex-wrap gap-3 justify-center text-[1.375rem] md:text-[1.75rem]"
  >
    {@render categoryButton($currentCategory === null, "Any", "any")}

    {#each category.values as categoryVal}
      {@render categoryButton(
        $currentCategory === categoryVal.id.toString(),
        categoryVal.name,
        categoryVal.id,
      )}
    {/each}
  </div>
</SettingsCard>
