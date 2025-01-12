<script lang="ts">
  const {
    gamePoints,
    questionLength,
  }: { gamePoints: number; questionLength: number } = $props();

  const perfect = ["Flawless victory!", "Quizzical champion!"];
  const partial = ["Great effort!", "Almost there!"];
  const incorrect = ["Oops! Practice makes perfect!", "Room to grow!"];

  const getRandomMessage = (messages: string[]) => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };
</script>

<h2 class="text-[#F56332] text-[2.25rem] md:text-[3.313rem] xl:text-[3.125rem]">
  {#if gamePoints === questionLength && gamePoints > 0}
    {getRandomMessage(perfect)}
  {:else if gamePoints < questionLength && gamePoints >= 1}
    {getRandomMessage(partial)}
  {:else}
    {getRandomMessage(incorrect)}
  {/if}
</h2>

<style>
  h2 {
    font-family: "Anton", sans-serif;
  }
</style>
