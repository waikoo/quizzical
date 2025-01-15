<script lang="ts">
  import QuizzicalTitle from "./QuizzicalTitle.svelte";
  import ButtonBack from "./ButtonBack.svelte";
  import { gameState } from "../stores";

  function backToHome() {
    $gameState = "greeting";
  }
  let hasScrolled = $state(false);

  $effect(() => {
    const article = document.querySelector(".myElement")!;

    const handleScroll = () => {
      hasScrolled = Boolean(article.scrollTop > 0);
    };

    if ($gameState === "playing") {
      article.addEventListener("scroll", handleScroll);
    }
    return () => article.removeEventListener("scroll", handleScroll);
  });
</script>

<header
  class="md:pt-[10px] relative z-[2]"
  class:backdrop-blur-sm={hasScrolled}
>
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
