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
  class="bg-[#180F05] p-[1px] w-full rounded-[25px] mx-auto max-w-[216px]"
  class:max-w-[281px]={category.name === "Category"}
>
  <div class="flex flex-col gap-2 bg-[#180F05] py-4 px-8 rounded-[25px]">
    <h2 class="text-[#E46136] text-center text-[1.375rem]">{category.name}</h2>

    {@render children()}
  </div>
</article>

<style>
  h2 {
    font-family: "Agdasima", sans-serif;
  }

  article {
    background: linear-gradient(#373636, black);
    box-shadow: 0px 0px 2px 1px black;
  }

  article > div {
    box-shadow: 0px 15px 50px #180f05;
  }
</style>
