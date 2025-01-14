<script lang="ts">
  import type { Snippet } from "svelte";
  import type { TCategory, TSettings } from "../type";
  const {
    category,
    children,
  }: { category: TSettings<string | number | TCategory>; children: Snippet } =
    $props();
</script>

<article
  class="bg-gradient-to-b from-[#373636] to-black shadow-[0_15px_50px_#180f05] p-[2px] w-full rounded-[25px] mx-auto max-w-[216px] md:max-w-[606px] xl:min-w-[566px]"
  class:max-w-[281px]={category.name === "Category"}
  class:xl:max-w-[1158px]={category.name === "Category"}
  class:md:min-w-[424px]={category.name === "Difficulty"}
  class:xl:min-w-[748px]={category.name === "Difficulty"}
>
  <div
    class="flex flex-col gap-2 xl:gap-[20px_30px] bg-[#180F05] py-[25px] px-[26.5px] xl:px-[25px] rounded-[25px] shadow-[0_0_2px_1px_black]"
  >
    <h2
      class="font-['Agdasima'] text-[#E46136] text-center text-[1.375rem] md:text-[1.75rem]"
    >
      {category.name}
    </h2>

    {@render children()}
  </div>
</article>

<style>
  @media (min-width: 768px) {
    article:last-of-type {
      max-width: 424px;
    }
  }
</style>
