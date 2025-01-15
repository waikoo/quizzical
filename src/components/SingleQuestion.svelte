<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { TriviaQuestionWithUuid } from "../type";
  import TimeoutBar from "./TimeoutBar.svelte";
  import QuizzicalQuestion from "./QuizzicalQuestion.svelte";
  import QuizzicalAnswers from "./QuizzicalAnswers.svelte";
  import Pill from "./Pill.svelte";

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

  const overflowAutoUntilDesktop = window.matchMedia("(max-width: 1280px)")
    .matches
    ? "overflow-y-scroll"
    : "overflow-y-hidden";
</script>

<article
  class={`${overflowAutoUntilDesktop} fixed inset-0 margin-auto pt-20 pb-10 mx-auto xl:pb-0 grid place-items-center myElement`}
  class:xl:pt-20={windowHeight < 615}
>
  <div class="w-[18.125rem] md:w-[607px] xl:w-[1059px]">
    <div
      class="flex justify-between items-center xl:grid-cols-3 xl:grid w-[90%] mx-auto"
    >
      <Pill
        textColorClass="text-[#E3BF00]"
        extraClass="col-start-2 col-end-3 justify-self-center"
        >{$gamePoints}/{questionLength}</Pill
      >
      <Pill
        textColorClass="text-[#E46136]"
        extraClass="col-start-3 col-end-4 justify-self-end"
        >Question {question.index}</Pill
      >
    </div>
    <TimeoutBar {timer} {hasAnswered} />

    <section
      class="flex flex-col gap-[25px] text-[1.063rem] text-[#E6DEB6] mx-auto w-[90%] mt-5"
    >
      <QuizzicalQuestion question={question.question} />

      <QuizzicalAnswers
        {showAnswer}
        {setShowAnswer}
        {setHasAnswered}
        {hasAnswered}
        {gamePoints}
        {incorrectAnswerId}
        {question}
      />
    </section>
  </div>
</article>
