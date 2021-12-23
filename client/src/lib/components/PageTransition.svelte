<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let refresh = "";

  let animations = false;

  onMount(
    () =>
      (animations =
        window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches !== true)
  );
</script>

{#key refresh}
  {#if !!animations}
    <div
      in:fly={{ delay: 125, duration: 250, x: -10 }}
      out:fly={{ duration: 100, x: 10 }}
    >
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
{/key}
