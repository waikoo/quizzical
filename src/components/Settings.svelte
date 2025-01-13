<script lang="ts">
  import { url as storeUrl } from "../stores";
  import { get, type Writable } from "svelte/store";
  import CategorySettings from "./CategorySettings.svelte";
  import QuestionSettings from "./QuestionSettings.svelte";
  import DifficultySettings from "./DifficultySettings.svelte";
  import { gameState, type GameSpeed } from "../stores";
  import TimerSettings from "./TimerSettings.svelte";
  import ButtonPlay from "./ButtonPlay.svelte";
  import QuizzicalTitle from "./QuizzicalTitle.svelte";
  import type { TCategory, TSettings, TSettingsArr } from "../type";
  import { categories } from "../categories";
  import ButtonBack from "./ButtonBack.svelte";

  let {
    url,
    closePopup,
    noQuestionsMatchSettings,
  }: {
    url: Writable<string>;
    closePopup: () => void;
    noQuestionsMatchSettings: boolean;
  } = $props();
  type UrlKey = "category" | "amount" | "difficulty" | "type";
  type UrlValue = number | string;

  const buildUrl = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    const name = target.dataset.name as UrlKey;
    const value = target.dataset[name as UrlValue] as UrlValue;

    const urlValue = get(url);
    const newUrl = new URL(urlValue);
    if (value !== "any") {
      newUrl.searchParams.set(name, value.toString() || `${value}`);
    } else {
      newUrl.searchParams.delete(name);
    }
    url.set(newUrl.toString());
  };

  const settingsCategory: TSettingsArr = [
    {
      name: "Speed",
      values: ["slow", "medium", "fast"],
    },
    {
      name: "Number of Questions",
      values: [10, 25, 50],
      buildUrl: buildUrl,
    },
    {
      name: "Category",
      values: categories,
      buildUrl: buildUrl,
    },
    {
      name: "Difficulty",
      values: ["easy", "medium", "hard"],
      buildUrl: buildUrl,
    },
  ];

  const startGame = () => {
    $gameState = "fetching";
  };

  const getParamFor = (name: string) => {
    new URL($url).searchParams.get(name);
  };
</script>

{#if noQuestionsMatchSettings}
  <section class="fixed inset-0 grid place-items-center bg-black/50 z-[1]">
    <div class="bg-black text-white text-[3rem]">
      <button class="text-right block" onclick={closePopup}>X</button>
      <p>
        Couldn't get {getParamFor("amount")} questions in category
        {getParamFor("category")} of difficulty {getParamFor("difficulty")}. Try
        a different combination.
      </p>
      <button
        class="block bg-white text-black px-10 mx-auto"
        onclick={closePopup}>OK</button
      >
    </div>
  </section>
{/if}

<div class="grid grid-cols-[1fr_2fr_1fr] items-center md:mt-[10px]">
  <a href="/" class="mt-1 pt-1">
    <ButtonBack />
  </a>
  <QuizzicalTitle hasBorder={true} />
</div>

<section
  class="flex flex-col gap-8 xl:gap-[3.125rem] pb-[6rem] md:pb-[12rem] pt-[85px]"
>
  <TimerSettings category={settingsCategory[0] as TSettings<string>} />
  <QuestionSettings category={settingsCategory[1] as TSettings<number>} />
  <CategorySettings category={settingsCategory[2] as TSettings<TCategory>} />
  <DifficultySettings category={settingsCategory[3] as TSettings<string>} />
</section>

<div
  class="fixed left-0 right-0 bottom-8 md:bottom-12 max-w-[273px] md:max-w-[90%] xl:max-w-[281px] mx-auto"
>
  <ButtonPlay handler={startGame}>Play</ButtonPlay>
</div>

{#if $gameState === "fetching"}
  <span class="text-red-300 relative z-2">Loading questions...</span>
{/if}
