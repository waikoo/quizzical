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
    hasAnswered,
    setHasAnswered,
    setShowAnswer,
  }: {
    question: TriviaQuestionWithUuid;
    timer: number;
    gamePoints: Writable<number>;
    questionLength: number;
    showAnswer: boolean;
    hasAnswered: boolean;
    setHasAnswered: (value: boolean) => void;
    setShowAnswer: (value: boolean) => void;
  } = $props();

  let windowHeight = $state(window.innerHeight);
  let incorrectAnswerId = $state<string | null>(null);

  $effect(() => {
    const saveInnerHeight = () => (windowHeight = window.innerHeight);
    window.addEventListener("resize", saveInnerHeight);

    return () => {
      window.removeEventListener("resize", saveInnerHeight);
    };
  });

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
    const baseClasses =
      "border-[1px] w-full border-black p-2 xl:p-[1.5rem] rounded-full";

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

<article
  class="fixed inset-0 margin-auto pb-10 mx-auto xl:pb-0 min-h-[calc(100vh] grid place-items-center xl:pt-20"
  class:xl:pt-20={windowHeight < 615}
>
  <div class="xl:w-[1059px]">
    <div
      class="mx-auto w-fit py-[1px] px-[3px] bg-gradient-to-b from-[#2b2b2b] to-black shadow-[4px_4px_20px_black] rounded-[40px] mt-2"
    >
      <p
        class="text-center bg-[#180f05] rounded-[40px] text-[#E3BF00] p-2 block relative md:text-[1.25rem] font-['Anton']"
      >
        {$gamePoints}/{questionLength}
      </p>
    </div>
    <TimeoutBar {timer} {hasAnswered} />

    <section
      class="flex flex-col gap-8 text-[1.063rem] text-[#E6DEB6] mx-auto w-[90%] mt-10"
    >
      <div
        class="bg-gradient-to-b from-[#2b2b2b] to-black rounded-[40px] shadow-[4px_3px_10px_#2f2f2f]"
      >
        <p
          class="bg-[#180F05] p-8 px-10 xl:p-[3rem] rounded-full text-center font-['Akshar'] text-[1.063rem] md:text-[1.438rem]"
        >
          {decodeHtmlEntities(question.question)}
        </p>
      </div>

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
    </section>
  </div>
</article>

<style>
  .correctBg {
    background: linear-gradient(#4e9731, #132e09);
  }

  .incorrectBg {
    background: linear-gradient(#e13800, #551500);
  }
</style>
