<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(import.meta.env.VITE_SERVER_URL, {
      credentials: "include",
    });

    const data = await res.json();

    if (res.status === 200) {
      return {
        props: {
          status: "ok",
          data: data.message,
        },
      };
    } else {
      return {
        props: {
          status: "error",
          data: "You're not logged in",
        },
      };
    }
  }
</script>

<script>
  import { isLoggedIn } from "$lib/stores/stores";

  export let data;
  export let status;

  if (status == "ok") {
    isLoggedIn.set(true);
  }
</script>

<h1>{data}</h1>

<style>
  h1 {
    text-align: center;
    word-wrap: break-word;
  }
</style>
