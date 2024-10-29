<script lang="ts">
  import { categories } from "../categories";

  const { addSetting }: { addSetting: (e: MouseEvent) => void } = $props();
</script>

<p>Which category?</p>

<button
  class="p-2 border-[1px] border-gray-300"
  data-name="category"
  data-category="any"
  onclick={addSetting}>Any</button
>
{#each categories as category}
  <button
    class="p-2 border-[1px] border-gray-300"
    data-category={category.id}
    data-name="category"
    onclick={addSetting}>{category.name}</button
  >
{/each}
