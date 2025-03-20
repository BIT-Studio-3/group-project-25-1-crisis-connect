<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<section>
  <!-- Card 1 -->
  <div class="card">
    <h1>
      Emergency: <span class="severity severe">Severe</span>
    </h1>
    <p class="headers">Incident Number:</p><p>F4081881</p>
    <p class="headers">Date and Time:</p><p>06/11/2024 11:07:51</p>
    <p class="headers">Location:</p><p>Doyleston, Selwyn District</p>
    <p class="headers">Duration:</p><p>00:00:00</p>
    <p class="headers">Attending Stations/Brigades:</p><p>Leeston</p>
    <p class="headers">Call Type:</p><p>Vegetation Fire</p>
  </div>

  <!-- Card 2 -->
  <div class="card">
    <h1>
      Emergency: <span class="severity moderate">Moderate</span>
    </h1>
    <p class="headers">Incident Number:</p><p>F4081881</p>
    <p class="headers">Date and Time:</p><p>06/11/2024 11:07:51</p>
    <p class="headers">Location:</p><p>Doyleston, Selwyn District</p>
    <p class="headers">Duration:</p><p>00:00:00</p>
    <p class="headers">Attending Stations/Brigades:</p><p>Leeston</p>
    <p class="headers">Call Type:</p><p>Vegetation Fire</p>
  </div>

  <!-- Card 3 -->
  <div class="card">
    <h1>
      Emergency: <span class="severity severe">Severe</span>
    </h1>
    <p class="headers">Incident Number:</p><p>F4081881</p>
    <p class="headers">Date and Time:</p><p>06/11/2024 11:07:51</p>
    <p class="headers">Location:</p><p>Doyleston, Selwyn District</p>
    <p class="headers">Duration:</p><p>00:00:00</p>
    <p class="headers">Attending Stations/Brigades:</p><p>Leeston</p>
    <p class="headers">Call Type:</p><p>Vegetation Fire</p>
  </div>

  <!-- Card 4 -->
  <div class="card">
    <h1>
      Emergency: <span class="severity extreme">Extreme</span>
    </h1>
    <p class="headers">Incident Number:</p><p>F4081881</p>
    <p class="headers">Date and Time:</p><p>06/11/2024 11:07:51</p>
    <p class="headers">Location:</p><p>Doyleston, Selwyn District</p>
    <p class="headers">Duration:</p><p>00:00:00</p>
    <p class="headers">Attending Stations/Brigades:</p><p>Leeston</p>
    <p class="headers">Call Type:</p><p>Vegetation Fire</p>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .card {
    padding: 20px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 5px;
    width: 280px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease-in-out;
  }

  .card:hover {
    transform: scale(1.05);
  }

  h1 {
    font-size: 1.8em;
    margin: 10px 0;
  }

  .severity {
    padding: 4px;
    border-radius: 5px;
    margin-bottom: 5px;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
  }

  .severe {
    background-color: orange;
    color: white;
  }

  .moderate {
    background-color: yellow;
    color: black;
  }

  .extreme {
    background-color: red;
    color: white;
  }

  .headers {
    font-weight: 900;
    margin: 5px 0;
  }

  p {
    margin: 3px 0;
  }
</style>
