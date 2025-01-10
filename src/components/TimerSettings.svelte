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
        class="p-2 rounded-full settingsButton text-[1.375rem] md:text-[1.75rem]"
        class:selected={$gameSpeed === speed}
        data-speed={speed}
        onclick={setGameSpeed}
      >
        <div class="rounded-full bg-[#180f05]">{speed}</div>
      </button>
    {/each}
  </div>
</SettingsCard>
