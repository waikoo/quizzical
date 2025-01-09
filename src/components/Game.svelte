<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { TriviaQuestionWithUuid } from "../type";
  import SingleQuestion from "./SingleQuestion.svelte";
  import type { GameSpeed, GameState } from "../stores";
  import QuizzicalTitle from "./QuizzicalTitle.svelte";

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
      if (timer > 0) {
        timer--;
      }

      if (timer === 0 || hasAnswered) {
        clearInterval(intervalId);

        if (hasAnswered) {
          setTimeout(() => {
            moveToNextQuestion();
          }, 2000);
        } else {
          moveToNextQuestion();
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  };

  const moveToNextQuestion = () => {
    if (questionCount === gameQuestions.length) {
      $gameState = "end";
      return;
    }

    questionCount++;
    timer = questionTimer;
    setHasAnswered(false);
    setShowAnswer(false);
    startCountdown();
  };

  startCountdown();
</script>

<QuizzicalTitle hasBorder={true} />
<SingleQuestion
  question={gameQuestions[questionCount - 1]}
  {timer}
  {gamePoints}
  {setHasAnswered}
  {setShowAnswer}
  {showAnswer}
  questionLength={gameQuestions.length}
/>
