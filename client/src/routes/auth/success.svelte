<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/stores";

  onMount(() => {
    isLoggedIn.set(true);
    goto("/");
  });
</script>
