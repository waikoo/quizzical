<script lang="ts">
  import type { Writable } from "svelte/store";
  import decodeHtmlEntities from "../utils/decodeHtmlEntities";
  import randomizeAnswers from "../utils/randomizeAnswers";
  import type { TriviaQuestionWithUuid } from "../type";

  let {
    showAnswer,
    setHasAnswered,
    setShowAnswer,
    gamePoints,
    incorrectAnswerId,
    question,
  }: {
    showAnswer: boolean;
    setHasAnswered: (value: boolean) => void;
    setShowAnswer: (value: boolean) => void;
    gamePoints: Writable<number>;
    incorrectAnswerId: string | null;
    question: TriviaQuestionWithUuid;
  } = $props();

  const handleClick = (answer: { uuid: string; answer: string }) => {
    setHasAnswered(true);
    setShowAnswer(true);
    const correctAnswerIsClicked = answer.uuid === question.correct_answer.uuid;

    if (correctAnswerIsClicked) {
      $gamePoints++;
    } else {
      incorrectAnswerId = answer.uuid;
    }
  };

  const getAnswerClasses = (answer: { uuid: string; answer: string }) => {
    const baseClasses =
      "border-[1px] w-full border-black p-2 xl:p-[1.5rem] rounded-full md:min-h-[88px]";

    if (showAnswer && answer.uuid === question.correct_answer.uuid) {
      return `${baseClasses} bg-[#386200] border-none`;
    }
    if (answer.uuid === incorrectAnswerId) {
      return `${baseClasses} bg-[#A12901]`;
    }
    return `${baseClasses} bg-[#180f05]`;
  };

  const getContainerClasses = (answer: { uuid: string; answer: string }) => {
    const baseClasses =
      "bg-gradient-to-b from-[#2b2b2b] to-black rounded-[40px] shadow-[4px_3px_10px_#2f2f2f] font-['Akshar'] p-[2px]";

    if (showAnswer && answer.uuid === question.correct_answer.uuid) {
      return `${baseClasses} bg-gradient-to-b from-[#4e9731] to-[#132e09]`;
    }
    if (answer.uuid === incorrectAnswerId) {
      return `${baseClasses} bg-gradient-to-b from-[#e13800] to-[#551500]`;
    }
    return baseClasses;
  };
</script>

<div class="grid gap-4 xl:grid-cols-2 text-[1.063rem] md:text-[1.438rem]">
  {#each randomizeAnswers(question.correct_answer, question.incorrect_answers) as answer}
    <div class={getContainerClasses(answer)}>
      <button
        class={getAnswerClasses(answer)}
        onclick={() => handleClick(answer)}
      >
        {decodeHtmlEntities(answer.answer)}
      </button>
    </div>
  {/each}
</div>
