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

<article class="pb-10">
  <div class="mx-auto quizzicalContainer rounded-[40px] mt-2">
    <p class="text-center text-[#E3BF00] p-2 block relative">
      {$gamePoints}/{questionLength}
    </p>
  </div>
  <TimeoutBar {timer} />

  <section
    class="flex flex-col gap-8 text-[1.063rem] text-[#E6DEB6] mx-auto w-[90%]"
  >
    <div class="gradientBorder">
      <p class="bg-[#180F05] p-8 px-10 rounded-full text-center akshar">
        {decodeHtmlEntities(question.question)}
      </p>
    </div>

    <div class="flex flex-col gap-4">
      {#each randomizeAnswers(question.correct_answer, question.incorrect_answers) as answer}
        <div
          class={`gradientBorder akshar p-[2px] ${showAnswer && answer.uuid === question.correct_answer.uuid ? "correctBg" : showAnswer && answer.uuid !== question.correct_answer.uuid ? "incorrectBg" : ""}`}
        >
          <button
            class={`border-[1px] w-full border-black p-2 rounded-full ${showAnswer && answer.uuid === question.correct_answer.uuid ? "bg-[#386200] border-none" : showAnswer && answer.uuid !== question.correct_answer.uuid ? "bg-[#A12901] border-none" : "bg-black "}`}
            data-uuid={answer.uuid}
            onclick={handleClick}>{decodeHtmlEntities(answer.answer)}</button
          >
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
