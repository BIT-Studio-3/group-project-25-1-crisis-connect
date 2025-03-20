
<script>
    // exporting quake data
    export let data;
</script>

<section>
<!-- Page title -->
<h1>Quakes</h1>
<div class="container">
    <details close>
        <summary><h2>MMI 5 Quakes</h2></summary>
        {#each data.quakes.features.slice(0,5) as thing}
            <div>
                <h3>{thing.properties.locality}</h3>
                <h3>Coordinates (y, x):</h3>
                <p>{thing.geometry.coordinates}</p>
                <h3>Depth:</h3>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <h3>Time:</h3>
                <p>
                    Date: {thing.properties.time
                        .replace(/[T]/g, " Time: ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>
<div class="container">
    <details close>
        <summary><h2>MMI 6 Quakes</h2></summary>
        {#each data.quakes2.features.slice(0,5) as thing}
            <div>
                <h3>{thing.properties.locality}</h3>
                <h3>Coordinates (y, x):</h3>
                <p>{thing.geometry.coordinates}</p>
                <h3>Depth:</h3>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <h3>Time:</h3>
                <p>
                    {thing.properties.time
                        .replace(/[TZ]/g, " ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>
<div class="container">
    <details open>
        <summary><h2>MMI 7 Quakes</h2></summary>
        {#each data.quakes3.features.slice(0,5) as thing}
            <div>
                <h3>{thing.properties.locality}</h3>
                <h3>Coordinates (y, x):</h3>
                <p>{thing.geometry.coordinates}</p>
                <h3>Depth:</h3>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <h3>Time:</h3>
                <p>
                    {thing.properties.time
                        .replace(/[TZ]/g, " ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>
<div class="container">
    <details open>
        <summary><h2>MMI 8 Quakes</h2></summary>
        {#each data.quakes4.features.slice(0,5) as thing}
            <div>
                <h>{thing.properties.locality}</h>
                <h3>Coordinates (y, x):</h3>
                <p>{thing.geometry.coordinates}</p>
                <h3>Depth:</h3>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <h3>Time:</h3>
                <p>
                    {thing.properties.time
                        .replace(/[TZ]/g, " ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>
</section>
<style>
    div {
        border: 2px solid black;
        margin: 0.6em;
        display: inline-block;
    }

    h3 {
        padding-left: 0.3em;
    }

    p {
        padding-top: 0.1em;
        padding-left: 0.8em;
    }

    details {
        padding: 0.5em;
        border-radius: 0.5em;
        padding-left: 10px;
    }

    summary {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        list-style-position: outside;
        margin-left: 10px;
        padding: 10px 10px 10px 20px;
        border-radius: 5px;
    }

    .container{
        padding:1em;
        border: none;
    }

</style>

