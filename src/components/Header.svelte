<script lang="ts">
  import QuizzicalTitle from "./QuizzicalTitle.svelte";
  import ButtonBack from "./ButtonBack.svelte";
  import { gameState } from "../stores";

  function backToHome() {
    $gameState = "greeting";
  }
</script>

<header class="md:mt-[10px] relative z-[2]">
  <button
    onclick={backToHome}
    class="mt-[-6px] md:mt-[-8px] xl:mt-[-10px] absolute"
  >
    <ButtonBack hide={$gameState === "greeting" || $gameState === "playing"} />
  </button>

  <QuizzicalTitle
    hasBorder={true}
    extraClass={`${$gameState === "greeting" ? "hidden" : "block"}`}
    onClick={backToHome}
  />
</header>
