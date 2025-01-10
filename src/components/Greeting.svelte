<script lang="ts">
  import { gameState } from "../stores";
  import ButtonPlay from "./ButtonPlay.svelte";
  import ButtonSettings from "./ButtonSettings.svelte";
  import QuizzicalTitle from "./QuizzicalTitle.svelte";

  function startGame() {
    $gameState = "fetching";
  }
</script>

<div class="h-[100vh] grid place-items-center relative overflow-hidden">
  <div class="flex flex-col gap-16">
    <h1 class="text-bold text-center">
      <span class="text-[#E46136] text-[1.563rem] tracking-[8.8px]"
        >WELCOME TO</span
      >
      <QuizzicalTitle hasBorder={false} />
    </h1>

    <div class="flex justify-center gap-8 flex-col">
      <ButtonPlay handler={startGame}>Play</ButtonPlay>
      <ButtonSettings />
    </div>
  </div>
</div>

<style>
  h1 {
    font-family: "Monoton", sans-serif;
  }

  h1 > span {
    font-family: "Agdasima", serif;
    text-shadow: 2px 2px 1px black;
  }
</style>
