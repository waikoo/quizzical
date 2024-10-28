<script lang="ts">
  import { categories } from "./categories";
  import { type UrlValue, type UrlKey } from "./utils/setUrl";
  import { setUrl } from "./utils/setUrl";

  const baseUrl = "https://opentdb.com/api.php?";
  let url = $state(`${baseUrl}`);

  const addSetting = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const name = target.dataset.name as UrlKey;
    const value = target.dataset[name as UrlValue] as UrlValue;

    url = setUrl(url, name, value);
    // if (name) {
    //   if (url.includes(name)) {
    //     const regex = new RegExp(
    //       `${name}=(\\d+|easy|medium|hard|boolean|multiple)`,
    //     );
    //     url = url.replace(regex, `${name}=${value}`);
    //   } else {
    //     url =
    //       url.at(-1) === "?"
    //         ? `${url}${name}=${value}`
    //         : `${url}&${name}=${value}`;
    //   }
    // }
  };
</script>

<main class="">
  <h1 class="">Welcome to Quizzical!</h1>

  <p>How many questions?</p>
  <button
    class="p-2 border-[1px] border-black"
    data-name="amount"
    data-amount="10"
    onclick={addSetting}>10</button
  >
  <button
    class="p-2 border-[1px] border-black"
    data-name="amount"
    data-amount="25"
    onclick={addSetting}>25</button
  >
  <button
    class="p-2 border-[1px] border-black"
    data-name="amount"
    data-amount="50"
    onclick={addSetting}>50</button
  >

  <p>Which category?</p>
  <button class="p-2 border-[1px] border-black" data-category="any">Any</button>
  {#each categories as category}
    <button
      class="p-2 border-[1px] border-black"
      data-category={category.id}
      data-name="category"
      onclick={addSetting}>{category.name}</button
    >
  {/each}

  <p>What difficulty?</p>
  <button class="p-2 border-[1px] border-black" data-difficulty="any"
    >Any</button
  >
  <button
    class="p-2 border-[1px] border-black"
    data-difficulty="easy"
    data-name="difficulty"
    onclick={addSetting}>Easy</button
  >
  <button
    class="p-2 border-[1px] border-black"
    data-difficulty="medium"
    data-name="difficulty"
    onclick={addSetting}>Medium</button
  >
  <button
    class="p-2 border-[1px] border-black"
    data-difficulty="hard"
    data-name="difficulty"
    onclick={addSetting}>Hard</button
  >

  <p>What type?</p>
  <button class="p-2 border-[1px] border-black" data-type="any">Any</button>
  <button
    class="p-2 border-[1px] border-black"
    data-type="multiple"
    data-name="type"
    onclick={addSetting}>Multiple choice</button
  >
  <button
    class="p-2 border-[1px] border-black"
    data-type="boolean"
    data-name="type"
    onclick={addSetting}>True / False</button
  >

  <p>{url}</p>
</main>

<style>
</style>
