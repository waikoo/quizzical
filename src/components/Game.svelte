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
  let showAnswer = $state(false);

  const setHasAnswered = (value: boolean) => (hasAnswered = value);
  const setShowAnswer = (value: boolean) => (showAnswer = value);
  const questionTimer =
    $gameSpeed === "slow" ? 60 : $gameSpeed === "medium" ? 30 : 10;
  let timer = $state(questionTimer);

  const startCountdown = () => {
    const intervalId = setInterval(() => {
      const onAnswer = () => {
        questionCount++;
        timer = questionTimer;
        setHasAnswered(false);
        setShowAnswer(false);
        startCountdown();
        return;
      };

      if (questionCount === gameQuestions.length) {
        $gameState = "end";
        clearInterval(intervalId);
      }

      if (hasAnswered) {
        clearInterval(intervalId);
        setTimeout(() => {
          onAnswer();
        }, 2000);
      } else if (timer === 0) {
        onAnswer();
      }
      timer--;
    }, 1000);
  };
  startCountdown();
</script>

<SingleQuestion
  question={gameQuestions[questionCount - 1]}
  {timer}
  {gamePoints}
  {setHasAnswered}
  {setShowAnswer}
  {showAnswer}
  questionLength={gameQuestions.length}
/>
