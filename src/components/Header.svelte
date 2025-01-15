<script lang="ts">
  import QuizzicalTitle from "./QuizzicalTitle.svelte";
  import ButtonBack from "./ButtonBack.svelte";
  import { gameState } from "../stores";

  function backToHome() {
    $gameState = "greeting";
  }
  let hasScrolled = $state(false);

  $effect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as Element;
      hasScrolled = Boolean(target.scrollTop > 0);
    };

    if ($gameState === "playing" || $gameState === "settings") {
      window.addEventListener("scroll", handleScroll, true);
    }
    return () => window.removeEventListener("scroll", handleScroll, true);
  });
</script>

<header
  class="md:pt-[10px] relative z-[2] flex items-center"
  class:backdrop-blur-sm={hasScrolled}
>
  <button
    onclick={backToHome}
    class="mt-[35px] md:mt-[30px] xl:mt-[30px] absolute"
  >
    <ButtonBack hide={$gameState === "greeting" || $gameState === "playing"} />
  </button>

  <QuizzicalTitle
    hasBorder={true}
    extraClass={`${$gameState === "greeting" ? "hidden" : "block"}`}
    onClick={backToHome}
  />
</header>
