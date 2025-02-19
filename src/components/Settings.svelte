<script lang="ts">
  import { get, type Writable } from "svelte/store";
  import CategorySettings from "./CategorySettings.svelte";
  import QuestionSettings from "./QuestionSettings.svelte";
  import DifficultySettings from "./DifficultySettings.svelte";
  import { gameState } from "../stores";
  import TimerSettings from "./TimerSettings.svelte";
  import ButtonPlay from "./ButtonPlay.svelte";
  import SettingsTryAgain from "./SettingsTryAgain.svelte";
  import type { TCategory, TSettings, TSettingsArr } from "../type";
  import { categories } from "../categories";

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
</script>

{#if noQuestionsMatchSettings}
  <SettingsTryAgain {closePopup} />
{/if}

<section
  class="flex flex-col gap-[25px] md:gap-[50px] xl:gap-[3.125rem] pb-[7.5rem] md:pb-[12rem] pt-[100px] md:pt-[180px] xl:pt-[148px]"
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
