<script lang="ts">
  import { gameState } from "../stores";
  import ButtonPlay from "./ButtonPlay.svelte";
  import ButtonSettings from "./ButtonSettings.svelte";
  import QuizzicalTitle from "./QuizzicalTitle.svelte";

  function startGame() {
    $gameState = "fetching";
  }

  function showSettings() {
    $gameState = "settings";
  }

  function backToHome() {
    $gameState = "greeting";
  }
</script>

<div class="min-h-[100dvh] grid place-items-center relative">
  <div class="flex flex-col gap-[30px] md:gap-[84px] xl:gap-[40px]">
    <h1 class="text-bold text-center">
      <span
        class="text-[#E46136] text-[1.563rem] md:text-[2.188rem] tracking-[8.8px] md:tracking-[19.3px]"
        >WELCOME TO</span
      >
      <QuizzicalTitle hasBorder={false} onClick={backToHome} />
    </h1>

    <div
      class="flex justify-center gap-[24px] md:[30px] flex-col w-[273px] md:w-[334px] xl:max-w-[281px] mx-auto"
    >
      <ButtonPlay handler={startGame}>Play</ButtonPlay>
      <ButtonSettings handler={showSettings} />
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
