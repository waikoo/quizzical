<script lang="ts">
  import decodeHtmlEntities from "../utils/decodeHtmlEntities";
  import type { TriviaQuestionWithUuid } from "../type";
  import randomizeAnswers from "../utils/randomizeAnswers";
  import type { Writable } from "svelte/store";

  let {
    question,
    timer,
    gamePoints,
    questionLength,
    showAnswer,
    setHasAnswered,
    setShowAnswer,
  }: {
    question: TriviaQuestionWithUuid;
    timer: number;
    gamePoints: Writable<number>;
    questionLength: number;
    showAnswer: boolean;
    setHasAnswered: (value: boolean) => void;
    setShowAnswer: (value: boolean) => void;
  } = $props();

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const uuid = target.dataset.uuid;

    setHasAnswered(true);
    setShowAnswer(true);
    if (uuid === question.correct_answer.uuid) {
      console.log("correct");
      $gamePoints++;
    } else {
      console.log("incorrect");
      return;
    }
  };
</script>

<article>
  <div class="flex">
    <p class="">{decodeHtmlEntities(question.question)}</p>
    <span class="ml-10">{$gamePoints}/{questionLength}</span>
    <span class="ml-10">{timer}</span>
  </div>

  <div class="mt-2">
    {#each randomizeAnswers(question.correct_answer, question.incorrect_answers) as answer}
      <button
        class={`border-[1px] border-black p-2 bg-black text-white ${showAnswer && answer.uuid === question.correct_answer.uuid ? "border-green-400" : showAnswer && answer.uuid !== question.correct_answer.uuid ? "border-red-300" : ""}`}
        data-uuid={answer.uuid}
        onclick={handleClick}>{decodeHtmlEntities(answer.answer)}</button
      >
    {/each}
  </div>
</article>
