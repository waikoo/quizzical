<script lang="ts">
  import { type Writable } from "svelte/store";
  import { baseUrl, type GameState } from "../stores";
  import ButtonPlay from "./ButtonPlay.svelte";

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

<div class="text-white">
  <h2 class="text-[#F56332] text-[2.25rem]">PERFECT SCORE!</h2>
  <p class="text-[1.063rem] text-[#DBCD9E]">
    {$gamePoints}/{questionLength} questions correct
  </p>

  <div class="flex flex-col gap-4">
    <button onclick={tryAgain}>Try Again</button>
    <!-- <button onclick={playDefault} class="p-2">Play (Default)</button> -->
    <ButtonPlay handler={playDefault}>Play (Default)</ButtonPlay>
    <button onclick={goToSettings}>Settings</button>
  </div>
</div>

<style>
  h2,
  p {
    font-family: "Anton", sans-serif;
  }
</style>
