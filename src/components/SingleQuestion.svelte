<script lang="ts">
  import decodeHtmlEntities from "../utils/decodeHtmlEntities";
  import type { TriviaQuestion } from "../type";

  let { question, timer }: { question: TriviaQuestion; timer: number } =
    $props();
</script>

<div class="flex">
  <p class="">{decodeHtmlEntities(question.question)}</p>
  <span class="ml-10">{timer}</span>
</div>
<div class="mt-2">
  <span class="border-[1px] border-gray-300 p-2">{question.correct_answer}</span
  >
  {#each question.incorrect_answers as incorrect_answer}
    <span class="border-[1px] border-black p-2">{incorrect_answer}</span>
  {/each}
</div>
