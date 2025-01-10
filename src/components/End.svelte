<script lang="ts">
  import { type Writable } from "svelte/store";
  import { baseUrl, type GameState } from "../stores";
  import ButtonPlay from "./ButtonPlay.svelte";
  import ButtonSettings from "./ButtonSettings.svelte";
  import ButtonTryAgain from "./ButtonTryAgain.svelte";

  const {
    questionLength,
    gamePoints,
    gameState,
    url,
  }: {
    questionLength: number;
    gamePoints: Writable<number>;
    gameState: Writable<GameState>;
    url: Writable<string>;
  } = $props();

  const goToSettings = () => {
    $gamePoints = 0;
    $url = baseUrl;
    $gameState = "settings";
  };

  const playDefault = () => {
    $gamePoints = 0;
    $url = baseUrl;
    $gameState = "fetching";
  };

  const tryAgain = () => {
    $gamePoints = 0;
    $gameState = "fetching";
  };
</script>

<div class="text-center flex flex-col gap-8">
  <div>
    <h2 class="text-[#F56332] text-[2.25rem]">PERFECT SCORE!</h2>
    <p class="text-[1.063rem] text-[#DBCD9E] uppercase">
      {$gamePoints}/{questionLength} answers correct
    </p>
  </div>

  <div class="flex flex-col gap-8">
    <ButtonTryAgain handler={tryAgain}>Try Again</ButtonTryAgain>
    <ButtonPlay handler={playDefault}>Play (Default)</ButtonPlay>
    <ButtonSettings handler={goToSettings} />
  </div>
</div>

<style>
  h2,
  p {
    font-family: "Anton", sans-serif;
  }
</style>
