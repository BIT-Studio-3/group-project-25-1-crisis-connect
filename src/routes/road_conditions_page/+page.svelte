<script>
  import { onMount } from 'svelte';
  let data = null;
  let loading = true;

  const apiUrl = 'https://api.openweathermap.org/data/2.5/roadrisk?appid=b57a015615786b95e362a61f15e82bc8';
  onMount(async () => {
    const response = await fetch(apiUrl);
    data = await response.json();
    loading = false;
  });
</script>

<main>
  {#if loading}
    <p>Loading...</p>
  {:else}
    <pre>{JSON.stringify(data, null, 2)}</pre>
  {/if}
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 1rem;
  }
</style>
