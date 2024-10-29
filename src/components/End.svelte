<script lang="ts">
  import { type Writable } from "svelte/store";
  import { baseUrl, type GameState } from "../stores";

  const {
    questionLength,
    gamePoints,
    gameState,
    url,
  }: {
    questionLength: number;
    gamePoints: Writable<number>;
    gameState: Writable<GameState>;
    url: Writable<string>;
  } = $props();
  $inspect(questionLength);

  const handlePlayAgain = () => {
    $gamePoints = 0;
    $gameState = "settings";
    $url = baseUrl;
  };
</script>

<div>
  <span>
    You answered {$gamePoints}/{questionLength} questions correct!
  </span>

  <div class="mt-2">
    <button class="p-2 border-gray-400 border-[1px]" onclick={handlePlayAgain}
      >Play Again</button
    >
  </div>
</div>
