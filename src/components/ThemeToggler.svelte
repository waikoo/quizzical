<script lang="ts">
  const setTheme = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    document.documentElement.dataset.theme = target.dataset.theme;
  };
</script>

<div>
  <button data-theme="light" onclick={setTheme}>Light</button>
  <button data-theme="dark" onclick={setTheme}>Dark</button>
</div>
