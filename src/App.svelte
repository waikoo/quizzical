<script lang="ts">
  import End from "./components/End.svelte";
  import Game from "./components/Game.svelte";
  import Settings from "./components/Settings.svelte";
  import { url, gameState } from "./stores";
</script>

<main class="">
  {#if $gameState === "settings"}
    <Settings {url} />
  {:else if $gameState === "playing"}
    <Game />
  {:else}
    <End />
  {/if}
</main>

<style>
</style>
