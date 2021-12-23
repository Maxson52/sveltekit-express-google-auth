<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(import.meta.env.VITE_SERVER_URL + "auth/logout", {
      method: "DELETE",
      credentials: "include",
    });

    return {
      props: {
        status: res.status,
      },
    };
  }
</script>

<script>
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/stores";

  export let status;

  if (status == 204) {
    isLoggedIn.set(false);
    goto("/");
  }
</script>
