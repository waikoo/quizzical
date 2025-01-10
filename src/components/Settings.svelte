<script lang="ts">
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

  let { url }: { url: Writable<string>; gameSpeed: Writable<GameSpeed> } =
    $props();
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

<div class="grid grid-cols-[auto_1fr_auto]">
  <div class="w-0 relative">
    <a href="/">
      <ButtonBack />
    </a>
  </div>
  <QuizzicalTitle hasBorder={true} />
</div>

<section class="flex flex-col gap-8 pb-[6rem]">
  <TimerSettings category={settingsCategory[0] as TSettings<string>} />
  <QuestionSettings category={settingsCategory[1] as TSettings<number>} />
  <CategorySettings category={settingsCategory[2] as TSettings<TCategory>} />
  <DifficultySettings category={settingsCategory[3] as TSettings<string>} />
</section>

<div class="fixed left-0 right-0 bottom-8 max-w-[273px] mx-auto">
  <ButtonPlay handler={startGame}>Play</ButtonPlay>
</div>

{#if $gameState === "fetching"}
  <span class="text-red-300 relative z-2">Loading questions...</span>
{/if}
