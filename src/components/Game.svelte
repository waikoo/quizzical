<script lang="ts">
  import type { TriviaQuestion } from "../type";

  const { gameQuestions }: { gameQuestions: TriviaQuestion[] } = $props();
</script>

<div>
  {#each gameQuestions as question}
    <p>{question.question}</p>
    <span class="border-[1px] border-black p-2">{question.correct_answer}</span>
    {#each question.incorrect_answers as incorrect_answer}
      <span class="border-[1px] border-black p-2">{incorrect_answer}</span>
    {/each}
  {/each}
</div>
