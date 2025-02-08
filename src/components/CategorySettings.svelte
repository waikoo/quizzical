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
  customPadding: string,
)}
  <button
    class={`p-[3px] font-['Anton'] bg-gradient-to-b from-[#2b2b2b] to-[black] uppercase shadow-[-3px_-3px_20px_-3px_#3E2528] rounded-full `}
    data-name="category"
    data-category={dataCategory}
    class:selected={selectedCondition}
    onclick={category.buildUrl}
  >
    <div
      class={`rounded-full py-[4px] bg-[#180f05] xl:hover:bg-[#19151D] flex justify-center items-center ${customPadding}`}
    >
      {textContent}
    </div>
  </button>
{/snippet}

<SettingsCard {category}>
  <div
    class="text-[#E6DEB6] flex flex-wrap gap-[18px] justify-center text-[1rem] md:text-[1.438rem]"
  >
    {@render categoryButton(
      $currentCategory === null,
      "Any",
      "any",
      "px-[15px]",
    )}

    {#each category.values as categoryVal}
      {@render categoryButton(
        $currentCategory === categoryVal.id.toString(),
        categoryVal.name,
        categoryVal.id,
        "px-[10px]",
      )}
    {/each}
  </div>
</SettingsCard>
