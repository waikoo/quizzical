<script lang="ts">
  import { type Writable } from "svelte/store";
  import { baseUrl, type GameState } from "../stores";
  import ButtonPlay from "./ButtonPlay.svelte";
  import ButtonSettings from "./ButtonSettings.svelte";
  import ButtonTryAgain from "./ButtonTryAgain.svelte";
  import QuizzicalTitle from "./QuizzicalTitle.svelte";

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

<div class="fixed top-0 left-0 right-0">
  <QuizzicalTitle hasBorder={true} />
</div>

<div class="grid place-items-center min-h-[100vh]">
  <article class="text-center p-[1px] w-[90%] rounded-[25px] mx-auto">
    <div class="flex flex-col gap-8 bg-[#180F05] py-12 px-3 rounded-[25px]">
      <div>
        <h2 class="text-[#F56332] text-[2.25rem]">PERFECT SCORE!</h2>
        <p class="text-[1.063rem] text-[#DBCD9E] uppercase">
          {$gamePoints}/{questionLength} answers correct
        </p>
      </div>

      <div class="flex flex-col gap-8 relative z-2">
        <ButtonTryAgain handler={tryAgain}>Try Again</ButtonTryAgain>
        <ButtonPlay handler={playDefault}>Play (Default)</ButtonPlay>
        <ButtonSettings handler={goToSettings} />
      </div>
    </div>
  </article>
</div>

<style>
  h2,
  p {
    font-family: "Anton", sans-serif;
  }

  article {
    background: linear-gradient(#373636, black);
    box-shadow: 0px 0px 2px 1px black;
  }

  article > div {
    box-shadow: 0px 15px 50px #180f05;
  }
</style>
