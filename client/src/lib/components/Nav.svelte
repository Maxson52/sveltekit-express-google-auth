<script>
  import { page } from "$app/stores";
  import { isLoggedIn } from "$lib/stores/stores";

  // nav styling
  $: currentPage = $page.path;
</script>

{#key $isLoggedIn}
  <nav>
    <a href="/" class={currentPage == "/" ? "active" : ""}>Home</a>
    {#if !$isLoggedIn}
      <a href={import.meta.env.VITE_SERVER_URL + "auth/login"}>Log in</a>
    {:else}
      <a href="/auth/logout">Log out</a>
    {/if}
  </nav>
{/key}

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0.5rem;
    gap: 0.5rem;
  }

  a {
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;

    transition: all 0.2s ease-in-out;
  }

  a.active {
    color: #fff;
    background: linear-gradient(to right, #0093e9, #4797ff);
  }
</style>
