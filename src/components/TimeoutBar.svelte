<script lang="ts">
  let { timer }: { timer: number } = $props();
  const totalTime = 60; // Total time for the countdown

  // Calculate the width of the overlay dynamically

  const calculateWidth = () => {
    return `${((totalTime - timer) / totalTime) * 100}%`;
  };
</script>

<article
  class="p-[5px] h-[16px] my-5 grid align-items-center rounded-full w-[90%] mx-auto"
>
  <section
    class="p-[1px] bg-[#181505] grid align-items-center relative overflow-hidden rounded-full"
  >
    <div class="h-[3px] rounded-full gradient-bar"></div>

    <div
      class="absolute top-0 right-0 bg-[#181505] h-[4px]"
      style="width: {calculateWidth()}; transition: width 1s linear;"
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

  /* Gradient bar: This is always visible in full width */
  .gradient-bar {
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

  /* Overlay bar: Covers the gradient from right to left */
  div:nth-of-type(2) {
    /* transition: width 1s linear; /* Smooth overlay shrinking */
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    top: 0;
    right: 0; /* Start from the right edge */
    background: #181505; /* Matches the section background */
    height: 100%; /* Full height of the section */
  }
</style>
