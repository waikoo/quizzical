<script lang="ts">
  import { url } from "../stores";
  import { onMount } from "svelte";

  let gameQuestions = $state<unknown>([]);

  const fetchQuestions = async (): Promise<void> => {
    try {
      const res = await fetch($url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      console.log(data.results);
      return data.results;
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  onMount(() => {
    gameQuestions = fetchQuestions();
  });
</script>

<div></div>
