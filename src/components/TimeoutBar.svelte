<script lang="ts">
  import { gameSpeed } from "../stores";

  let { timer, hasAnswered }: { timer: number; hasAnswered: boolean } =
    $props();
  const totalTime = {
    slow: 60,
    medium: 30,
    fast: 10,
  };

  let lastWidth = "0%";

  const calculateWidth = () => {
    if (hasAnswered) {
      return lastWidth;
    }
    const newWidth = `${((totalTime[$gameSpeed] - timer) / totalTime[$gameSpeed]) * 100}%`;
    lastWidth = newWidth;
    return newWidth;
  };
</script>

<article
  class="p-[5px] h-[16px] my-5 grid align-items-center rounded-full w-[90%] mx-auto"
>
  <section
    class="p-[1px] bg-[#181505] grid align-items-center relative overflow-hidden rounded-full"
  >
    <div class="h-[3px] rounded-full gradientBar"></div>

    <div
      class="absolute top-0 right-0 bg-[#181505] h-[4px]"
      style="width: {calculateWidth()};"
    ></div>
  </section>
</article>

<style>
  article {
    background: linear-gradient(#2b2b2b, #0d0d0d);
  }

  section {
    background: #181505;
  }

  .gradientBar {
    height: 5px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(236, 0, 0, 1) 0%,
      rgba(255, 183, 1, 1) 40%,
      rgba(255, 183, 0, 1) 50%,
      rgba(255, 183, 1, 1) 60%,
      rgba(0, 124, 19, 1) 100%
    );
  }

  div:nth-of-type(2) {
    transition: width 1s linear;
    position: absolute;
    top: 0;
    right: 0;
    background: #181505;
    height: 11px;
  }
</style>
