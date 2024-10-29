<script lang="ts">
  import type { TriviaQuestion } from "../type";
  import SingleQuestion from "./SingleQuestion.svelte";

  const { gameQuestions }: { gameQuestions: TriviaQuestion[] } = $props();

  let questionCount = $state(1);
  let timer = $state(5);

  const interval = setInterval(() => {
    if (timer === 0) {
      questionCount++;
      timer = 5;
      return;
    }
    timer--;
  }, 1000);
</script>

<article>
  <SingleQuestion question={gameQuestions[questionCount - 1]} {timer} />
</article>
