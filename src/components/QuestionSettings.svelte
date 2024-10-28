<script lang="ts">
  const { addSetting }: { addSetting: (e: MouseEvent) => void } = $props();

  const questions = [10, 25, 50];
</script>

<p>How many questions?</p>

{#each questions as question}
  <button
    class="p-2 border-[1px] border-black"
    data-name="amount"
    data-amount={question}
    onclick={addSetting}>{question}</button
  >
{/each}
