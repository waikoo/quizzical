<script lang="ts">
  import type { Writable } from "svelte/store";
  import { type UrlKey, type UrlValue, setUrl } from "../utils/setUrl";
  import { removeFromUrl } from "../utils/removeFromUrl";
  import CategorySettings from "./CategorySettings.svelte";
  import QuestionSettings from "./QuestionSettings.svelte";
  import DifficultySettings from "./DifficultySettings.svelte";
  import TypeSettings from "./TypeSettings.svelte";

  let { url }: { url: Writable<string> } = $props();

  const addSetting = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const name = target.dataset.name as UrlKey;
    const value = target.dataset[name as UrlValue] as UrlValue;

    value === "any"
      ? removeFromUrl(url, name, value)
      : setUrl(url, name, value);
  };
</script>

<h1 class="">Welcome to Quizzical!</h1>

<QuestionSettings {addSetting} />
<CategorySettings {addSetting} />
<DifficultySettings {addSetting} />
<TypeSettings {addSetting} />
