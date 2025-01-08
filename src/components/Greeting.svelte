<script lang="ts">
  import ButtonPlay from "./ButtonPlay.svelte";
  import ButtonSettings from "./ButtonSettings.svelte";
  import { url, gameState, baseUrl, gameSpeed, gamePoints } from "../stores";

  // $inspect(gameQuestions);
  // $inspect($gameState);
  // $inspect(isFetchingError);
</script>

<div class="h-[100vh] grid place-items-center relative overflow-hidden">
  <div class="flex flex-col gap-16">
    <h1 class="text-bold text-center">
      <span class="text-[#E46136] text-[1.563rem] tracking-[8.8px]"
        >WELCOME TO</span
      >
      <div class="tracking-[-1.1px]">
        <span class="text-[#FFA13D] text-[2.875rem]">Q</span>
        <span class="text-[#2775E9]">u</span>
        <span class="text-[#FF82E6]">i</span>
        <span class="text-[#FCFF46]">z</span>
        <span class="text-[#D2BDFF]">z</span>
        <span class="text-[#79C19B]">i</span>
        <span class="text-[#FF7700]">c</span>
        <span class="text-[#779DFF]">a</span>
        <span class="text-[#CFDD00]">l</span>
      </div>
    </h1>

    <div class="flex justify-center gap-8 flex-col">
      <ButtonPlay />
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

  div > span {
    text-shadow: 2px 2px 1px black;
    font-size: 3.375rem;
  }

  div > span:first-of-type {
    font-size: 2.875rem;
  }
</style>
