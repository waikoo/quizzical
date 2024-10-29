<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { GameSpeed } from "../stores";

  let { gameSpeed }: { gameSpeed: Writable<GameSpeed> } = $props();

  const setGameSpeed = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    $gameSpeed = target.dataset.speed as GameSpeed;
  };
</script>

<div>
  <p>How fast?</p>
  <button
    class="border-[1px] border-gray-300 p-2"
    data-speed="slow"
    onclick={setGameSpeed}>Slow</button
  >
  <button
    class="border-[1px] border-gray-300 p-2"
    data-speed="medium"
    onclick={setGameSpeed}>Medium</button
  >
  <button
    class="border-[1px] border-gray-300 p-2"
    data-speed="fast"
    onclick={setGameSpeed}>Fast</button
  >
</div>
