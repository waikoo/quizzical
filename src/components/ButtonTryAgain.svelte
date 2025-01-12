<script lang="ts">
  import type { Snippet } from "svelte";
  import { url } from "../stores";

  const { children, handler }: { children: Snippet; handler: () => void } =
    $props();
  console.log($url);
</script>

<div class="w-full h-full relative isolate">
  <button
    class="text-[1.313rem] md:text-[2.125rem] xl:text-[1.75rem] tracking-[0.4px] uppercase rounded-full mx-auto block h-[36px] w-[79%] md:h-[65px] xl:h-[53px]"
    onclick={handler}
  >
    <div
      class="rounded-full bg-[#180F05] hover:bg-[#F2E01F] hover:text-[#3A1608] text-[#FFF1D4] w-[97%] mx-auto"
    >
      {@render children()}
    </div>
  </button>
</div>

<style>
  button {
    box-shadow: 3px 3px 4px black;
    background: linear-gradient(#e66e46, #994f36);
  }

  button div {
    box-shadow: 0px 0px 2px #342905;
    /* padding: 2px; */
    position: relative;
  }
  button::before {
    content: "";
    position: absolute;
    width: 82%;
    inset: 0;
    margin: auto;
    height: 120%;
    border-radius: 9999px;
    z-index: -1;
    background: #fff1d4;
    border: 2px solid #dcc600;
    box-shadow: 3px 3px 10 #766a00;
  }

  button::after {
    content: "";
    position: absolute;
    width: 85%;
    inset: 0;
    margin: auto;
    height: 150%;
    border-radius: 9999px;
    z-index: -2;
    background: linear-gradient(#535353, #3a3305);
    box-shadow: 3px 3px 10px #16140a;
  }

  button {
    font-family: "Anton", sans-serif;
    box-shadow: 0px 0px 2px #342905;
  }
</style>
