<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { TriviaQuestion } from "../type";
  import SingleQuestion from "./SingleQuestion.svelte";
  import type { GameSpeed } from "../stores";

  const {
    gameQuestions,
    gameSpeed,
  }: { gameQuestions: TriviaQuestion[]; gameSpeed: Writable<GameSpeed> } =
    $props();

  let questionCount = $state(1);

  const questionTimer =
    $gameSpeed === "slow" ? 60 : $gameSpeed === "medium" ? 30 : 10;
  let timer = $state(questionTimer);

  setInterval(() => {
    if (timer === 0) {
      questionCount++;
      timer = questionTimer;
      return;
    }
    timer--;
  }, 1000);
</script>

<article>
  <SingleQuestion question={gameQuestions[questionCount - 1]} {timer} />
</article>
