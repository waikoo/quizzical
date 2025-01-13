<script lang="ts">
  import { onMount } from "svelte";
  import type { GameSpeed } from "../stores";
  import { gameSpeed } from "../stores";
  import type { TSettings } from "../type";
  import SettingsCard from "./SettingsCard.svelte";

  let { category }: { category: TSettings<string> } = $props();

  const setGameSpeed = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    $gameSpeed = target.dataset.speed as GameSpeed;
  };

  $effect(() => {
    onMount(() => {
      const selected = document.querySelector(`[data-speed="${$gameSpeed}"]`);
      selected?.classList.add("selected");
    });
  });
</script>

<SettingsCard {category}>
  <div class="grid gap-6 text-[#E6DEB6] md:grid-cols-3">
    {#each category.values as speed}
      <button
        class="p-[3px] rounded-full bg-gradient-to-b from-[#2b2b2b] to-[black] uppercase font-['Anton'] text-[1.375rem] md:text-[1.438rem] shadow-[-3px_-3px_20px_-3px_#3E2528]"
        class:selected={$gameSpeed === speed}
        data-speed={speed}
        onclick={setGameSpeed}
      >
        <div
          class="rounded-full bg-[#180f05] py-[4px] px-[18px] shadow-[4px_4px_20px_black] flex justify-center items-center"
        >
          {speed}
        </div>
      </button>
    {/each}
  </div>
</SettingsCard>
