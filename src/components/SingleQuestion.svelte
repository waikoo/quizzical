<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { TriviaQuestionWithUuid } from "../type";
  import TimeoutBar from "./TimeoutBar.svelte";
  import QuizzicalQuestion from "./QuizzicalQuestion.svelte";
  import QuizzicalAnswers from "./QuizzicalAnswers.svelte";

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
</script>

<article
  class="fixed inset-0 margin-auto pb-10 mx-auto xl:pb-0 min-h-[calc(100vh] grid place-items-center xl:pt-20"
  class:xl:pt-20={windowHeight < 615}
>
  <div class="md:w-[607px] xl:w-[1059px]">
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
      <QuizzicalQuestion question={question.question} />

      <QuizzicalAnswers
        {showAnswer}
        {setShowAnswer}
        {setHasAnswered}
        {gamePoints}
        {incorrectAnswerId}
        {question}
      />
    </section>
  </div>
</article>
