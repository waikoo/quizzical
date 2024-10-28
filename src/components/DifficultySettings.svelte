<script lang="ts">
  const { addSetting }: { addSetting: (e: MouseEvent) => void } = $props();

  const difficulties = ["Easy", "Medium", "Hard"];
</script>

<p>What difficulty?</p>
<button
  class="p-2 border-[1px] border-black"
  data-difficulty="any"
  data-name="difficulty"
  onclick={addSetting}>Any</button
>
{#each difficulties as difficulty}
  <button
    class="p-2 border-[1px] border-black"
    data-difficulty={difficulty.toLowerCase()}
    data-name="difficulty"
    onclick={addSetting}>{difficulty}</button
  >
{/each}
