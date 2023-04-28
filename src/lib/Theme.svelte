<script>
  import { active, text } from "$lib/stores";

  export let index;
  export let colors;
</script>

{#if $active == index}
  <div
    class="p-16 pt-20 grid grid-cols-2 gap-10"
    style="background-color: {colors.Base.Hex};"
  >
    {#each Object.entries(colors) as [name, { Hex, RGB, HSL }]}
      <div
        class="bg-red-500 rounded-lg py-10 px-12 flex justify-between"
        style="background-color: {Hex}; color: {$text ? 'black' : Hex}"
      >
        <span>{name}</span>
        <span>{Hex}</span>
      </div>
    {/each}
  </div>
{/if}
