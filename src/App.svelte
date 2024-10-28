<script lang="ts">
  import Settings from "./components/Settings.svelte";
  import { url } from "./stores";
</script>

<main class="">
  <Settings {url} />
  <span>{$url}</span>
</main>

<style>
</style>
