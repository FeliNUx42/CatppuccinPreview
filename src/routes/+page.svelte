<script>
  import "../app.css";
  import { active, text } from "$lib/stores";
  import colors from "$lib/colors.json";
  import Theme from "$lib/Theme.svelte";
</script>

<svelte:head>
  <title>Catppuccin Themes</title>
</svelte:head>

<header class="fixed w-full z-10 flex text-sm text-gray-300 bg-black">
  <div class="py-1 bg-black text-gray-300 flex justify-around flex-1">
    {#each Object.keys(colors) as k, i}
      <button
        class="hover:underline {$active == i ? 'underline' : ''}"
        on:click={() => active.set(i)}>{k}</button
      >
    {/each}
  </div>

  <button
    class="py-1 px-5 border-l-2 border-gray-700 hover:underline w-28 text-right"
    on:click={() => text.update((n) => !n)}
    >{$text ? "Hide" : "Show"} Text</button
  >
</header>

<main class="relative">
  {#each Object.entries(colors) as [k, v], i}
    <Theme colors={v} index={i} />
  {/each}
</main>

<footer class="bg-black text-gray-400 text-sm py-1 text-center">
  <span>Created by </span>
  <a
    href="https://github.com/FeliNUx42"
    class="hover:underline"
    target="_blank"
    rel="noreferrer">FeliNUx42</a
  >
  <span>, Github Repo:</span>
  <a
    href="https://github.com/FeliNUx42/CatppuccinPreview/"
    class="hover:underline"
    target="_blank"
    rel="noreferrer">CatppuccinPreview</a
  >
</footer>
