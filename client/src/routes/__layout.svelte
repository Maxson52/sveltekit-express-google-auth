<script context="module">
  export async function load({ page }) {
    return {
      props: {
        key: page.path,
      },
    };
  }
</script>

<script>
  import Nav from "$lib/components/Nav.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";

  export let key;
</script>

<Nav />

<PageTransition refresh={key}><slot /></PageTransition>
