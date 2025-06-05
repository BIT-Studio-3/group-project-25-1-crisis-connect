<script>
    export let title;
    export let quakes;
    export let open = false;
  
    const formatTime = (time) =>
      time.replace(/[TZ]/g, " ").replace(/[Z]/g, " ");
  </script>
  
  <div class="container">
    <details {open}>
      <summary><h2>{title}</h2></summary>
      {#each quakes.features.slice(0, 5) as thing}
        <div class="quake-entry">
          <h3>{thing.properties.locality}</h3>
          <h3>Coordinates (y, x):</h3>
          <p>{thing.geometry.coordinates}</p>
          <h3>Depth:</h3>
          <p>{thing.properties.depth.toFixed(3)} KM</p>
          <h3>Time:</h3>
          <p>{formatTime(thing.properties.time)}</p>
        </div>
      {/each}
    </details>
  </div>
  
  
<style>
  .container {
    padding: 1em;
    border: none;
  }

  .quake-entry {
    border: 2px solid black;
    margin: 0.6em;
    display: inline-block;
  }

  h2 {
    color: antiquewhite;
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

  @media (max-width: 768px) {
    .container {
      padding: 0.5em;
    }

    .quake-entry {
      display: block;
      width: 100%;
      max-width: 90%;
      margin: 10px auto;
      border-radius: 10px;
      padding: 10px;
    }

    summary {
      font-size: 1.2em;
      padding: 10px;
    }

    h3, p {
      font-size: 1em;
      padding-left: 5px;
    }

    details {
      padding: 10px;
    }
  }
</style>

