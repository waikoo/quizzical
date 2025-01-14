<script lang="ts">
  import { type Writable } from "svelte/store";
  import { baseUrl, type GameState } from "../stores";
  import ButtonPlay from "./ButtonPlay.svelte";
  import ButtonSettings from "./ButtonSettings.svelte";
  import ButtonTryAgain from "./ButtonTryAgain.svelte";
  import FeedbackMessage from "./FeedbackMessage.svelte";
  // @ts-ignore
  import { confetti } from "@neoconfetti/svelte";

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

  const tryAgain = () => {
    $gamePoints = 0;
    $gameState = "fetching";
  };

  const playDefault = () => {
    $gamePoints = 0;
    $url = baseUrl;
    $gameState = "fetching";
  };

  const goToSettings = () => {
    $gamePoints = 0;
    $url = baseUrl;
    $gameState = "settings";
  };
</script>

<div class="flex justify-center">
  {#if $gamePoints > 0}
    <div use:confetti></div>
  {/if}
</div>

<div class="flex justify-center items-center min-h-[calc(100dvh-100px)]">
  <article
    class="text-center p-[1px] rounded-[25px] mx-auto col-start-2 col-end-3 w-[301px] md:w-[494px] bg-gradient-to-b from-[#373636] to-[black] shadow-[0_0_2px_1px_black] xl:w-[452px]"
  >
    <div
      class="flex flex-col gap-[40px] md:gap-[68px] xl:gap-[3.5rem] bg-[#180F05] py-[40px] px-3 rounded-[25px] shadow-[0_15px_50px_#180f05] xl:w-[452px]"
    >
      <div class="flex flex-col gap-[20px]">
        <FeedbackMessage gamePoints={$gamePoints} {questionLength} />
        <p
          class="font-['Anton'] text-[1.063rem] text-[#DBCD9E] uppercase md:text-[1.438rem] xl:text-[1.25rem]"
        >
          {$gamePoints}/{questionLength} answers correct
        </p>
      </div>

      <div
        class="flex flex-col gap-[20px] md:gap-[28px] xl:gap-8 relative z-2 w-full md:w-[318px] xl:w-[281px] mx-auto"
      >
        <ButtonTryAgain handler={tryAgain}>Try Again</ButtonTryAgain>
        <ButtonPlay handler={playDefault}>Play (Default)</ButtonPlay>
        <ButtonSettings handler={goToSettings} />
      </div>
    </div>
  </article>
</div>
