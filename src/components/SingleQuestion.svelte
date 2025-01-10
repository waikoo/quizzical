<script lang="ts">
  import type { Writable } from "svelte/store";
  import decodeHtmlEntities from "../utils/decodeHtmlEntities";
  import randomizeAnswers from "../utils/randomizeAnswers";
  import type { TriviaQuestionWithUuid } from "../type";
  import TimeoutBar from "./TimeoutBar.svelte";

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

  let incorrectAnswerId = $state<string | null>(null);

  $effect(() => {
    if (question) {
      incorrectAnswerId = null;
    }
  });

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
    const baseClasses = "border-[1px] w-full border-black p-2 rounded-full";

    if (showAnswer && answer.uuid === question.correct_answer.uuid) {
      return `${baseClasses} bg-[#386200] border-none`;
    }
    if (answer.uuid === incorrectAnswerId) {
      return `${baseClasses} bg-[#A12901]`;
    }
    return `${baseClasses} bg-[#180f05]`;
  };

  const getContainerClasses = (answer: { uuid: string; answer: string }) => {
    const baseClasses = "gradientBorder akshar p-[2px]";

    if (showAnswer && answer.uuid === question.correct_answer.uuid) {
      return `${baseClasses} correctBg`;
    }
    if (answer.uuid === incorrectAnswerId) {
      return `${baseClasses} incorrectBg`;
    }
    return baseClasses;
  };
</script>

<article class="pb-10">
  <div class="mx-auto quizzicalContainer rounded-[40px] mt-2">
    <p class="text-center text-[#E3BF00] p-2 block relative md:text-[1.25rem]">
      {$gamePoints}/{questionLength}
    </p>
  </div>
  <TimeoutBar {timer} />

  <section
    class="flex flex-col gap-8 text-[1.063rem] text-[#E6DEB6] mx-auto w-[90%]"
  >
    <div class="gradientBorder">
      <p
        class="bg-[#180F05] p-8 px-10 rounded-full text-center akshar text-[1.063rem] md:text-[1.438rem]"
      >
        {decodeHtmlEntities(question.question)}
      </p>
    </div>

    <div class="flex flex-col gap-4 text-[1.063rem] md:text-[1.438rem]">
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
  </section>
</article>

<style>
  .quizzicalContainer {
    width: fit-content;
    padding: 1px 3px;
    background: linear-gradient(#2b2b2b, black);
    box-shadow: 4px 4px 20px #000000;
  }

  div > p {
    font-family: "Anton", sans-serif;
    padding: 6px 20px;
    background: #180f05;
    border-radius: 40px;
  }

  .gradientBorder {
    background: linear-gradient(#2b2b2b, black);
    border-radius: 40px;
    box-shadow: 4px 3px 10px #2f2f2f;
  }

  .akshar {
    font-family: "Akshar", sans-serif;
  }

  .correctBg {
    background: linear-gradient(#4e9731, #132e09);
  }

  .incorrectBg {
    background: linear-gradient(#e13800, #551500);
  }
</style>

