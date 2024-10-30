<script lang="ts">
  import type { Writable } from "svelte/store";

  import type { TriviaQuestionWithUuid } from "../type";
  import SingleQuestion from "./SingleQuestion.svelte";
  import type { GameSpeed, GameState } from "../stores";

  const {
    gameQuestions,
    gameSpeed,
    gameState,
    gamePoints,
  }: {
    gameQuestions: TriviaQuestionWithUuid[];
    gameSpeed: Writable<GameSpeed>;
    gameState: Writable<GameState>;
    gamePoints: Writable<number>;
  } = $props();

  let questionCount = $state(1);
  let hasAnswered = $state(false);

  const setHasAnswered = (value: boolean) => (hasAnswered = value);
  const questionTimer =
    $gameSpeed === "slow" ? 60 : $gameSpeed === "medium" ? 30 : 10;
  let timer = $state(questionTimer);

  setInterval(() => {
    if (questionCount === gameQuestions.length) {
      $gameState = "end";
    }
    if (timer === 0 || hasAnswered) {
      questionCount++;
      timer = questionTimer;
      setHasAnswered(false);
      return;
    }
    timer--;
  }, 1000);
</script>

<SingleQuestion
  question={gameQuestions[questionCount - 1]}
  {timer}
  {gamePoints}
  {setHasAnswered}
  questionLength={gameQuestions.length}
/>
