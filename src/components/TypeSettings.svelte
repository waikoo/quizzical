<script lang="ts">
  const { addSetting }: { addSetting: (e: MouseEvent) => void } = $props();
</script>

<p>What type?</p>
<button
  class="p-2 border-[1px] border-gray-300"
  data-type="any"
  data-name="type"
  onclick={addSetting}>Any</button
>
<button
  class="p-2 border-[1px] border-gray-300"
  data-type="multiple"
  data-name="type"
  onclick={addSetting}>Multiple choice</button
>
<button
  class="p-2 border-[1px] border-gray-300"
  data-type="boolean"
  data-name="type"
  onclick={addSetting}>True / False</button
>
