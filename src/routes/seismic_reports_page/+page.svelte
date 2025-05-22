
<script>
    // exporting quake data
    export let data;
    import QuakeList from '$lib/QuakeList.svelte';
</script>

<section>
<!-- Page title -->
<h1>Quakes</h1>
<QuakeList title="MMI 5 Quakes" quakes={data.quakes} />
<QuakeList title="MMI 6 Quakes" quakes={data.quakes2} />
<QuakeList title="MMI 7 Quakes" quakes={data.quakes3} />
<QuakeList title="MMI 8 Quakes" quakes={data.quakes4}/>
</section>
<style>
    h1{
        font-size: 2.5em;
        color: #333;
    }
</style>

