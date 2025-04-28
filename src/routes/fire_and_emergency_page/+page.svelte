<script>
</script>

<section>
  {#each [
    { severity: "Severe", level: "severe", incident: "F4081881", date: "06/11/2024 11:07:51", location: "Doyleston, Selwyn District", duration: "00:00:00", station: "Leeston", type: "Vegetation Fire" },
    { severity: "Moderate", level: "moderate", incident: "F4081881", date: "06/11/2024 11:07:51", location: "Doyleston, Selwyn District", duration: "00:00:00", station: "Leeston", type: "Vegetation Fire" },
    { severity: "Severe", level: "severe", incident: "F4081881", date: "06/11/2024 11:07:51", location: "Doyleston, Selwyn District", duration: "00:00:00", station: "Leeston", type: "Vegetation Fire" },
    { severity: "Extreme", level: "extreme", incident: "F4081881", date: "06/11/2024 11:07:51", location: "Doyleston, Selwyn District", duration: "00:00:00", station: "Leeston", type: "Vegetation Fire" }
  ] as card}
  <div class="card">
    <h1>
      Emergency: <span class="severity {card.level}">{card.severity}</span>
    </h1>
    <p class="headers">Incident Number:</p><p>{card.incident}</p>
    <p class="headers">Date and Time:</p><p>{card.date}</p>
    <p class="headers">Location:</p><p>{card.location}</p>
    <p class="headers">Duration:</p><p>{card.duration}</p>
    <p class="headers">Attending Stations/Brigades:</p><p>{card.station}</p>
    <p class="headers">Call Type:</p><p>{card.type}</p>
  </div>
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
    justify-items: center;
  }

  .card {
    padding: 20px;
    border: 2px solid black;
    border-radius: 8px;
    min-width: 280px;
    max-width: 350px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  }

  h1 {
    font-size: 1.6em;
    margin-bottom: 10px;
  }

  .severity {
    padding: 6px 10px;
    border-radius: 6px;
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
    font-weight: bold;
    margin-top: 8px;
  }

  p {
    margin: 3px 0;
  }

  @media (max-width: 768px) {
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
