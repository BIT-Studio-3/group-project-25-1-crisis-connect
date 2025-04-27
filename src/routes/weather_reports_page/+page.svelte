 
<script>
    import { onMount } from 'svelte';
   
    let weather = {};
    const cities = [
      { name: "Auckland", lat: -36.8485, lon: 174.7633 },
      { name: "Hamilton", lat: -37.7870, lon: 175.2793 },
      { name: "Tauranga", lat: -37.6878, lon: 176.1651 },
      { name: "Napier", lat: -39.4928, lon: 176.9120 },
      { name: "Wellington", lat: -41.2865, lon: 174.7762 },
      { name: "Nelson", lat: -41.2706, lon: 173.2840 },
      { name: "Christchurch", lat: -43.5321, lon: 172.6362 },
      { name: "Dunedin", lat: -45.8666, lon: 170.5190 }
    ];
    let selectedCity = cities[7].name;
       
    async function fetchWeather(cityName) {
    const city = cities.find(c => c.name === cityName);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=82336dbf0297a6e4f7502d515fcbad51&units=metric`);
    weather = await res.json();
  }
 
  onMount(() => {
    fetchWeather(selectedCity);
  });
 
  let showModal = true;
 
function closeModal() {
    showModal = false;
}
</script>
 
 
<section>
<h2>Current Weather</h2>
<label for="city">Choose a city:</label>
<select id="city" bind:value={selectedCity} on:change={() => fetchWeather(selectedCity)}>
    {#each cities as city}
<option value={city.name}>{city.name}</option>
    {/each}
</select>
<ul>
<li><strong>Location: </strong>{weather.name ? weather.name : "No location data"}</li>
<li><strong>Temperature: </strong>{weather.main?.temp ? `${weather.main.temp} °C` : "No temperature data"}</li>
<li><strong>Humidity: </strong>{weather.main?.humidity ? `${weather.main.humidity} %` : "No humidity data"}</li>
<li><strong>Pressure: </strong>{weather.main?.pressure ? `${weather.main.pressure} Pa` : "No pressure data"}</li>
<li><strong>Windspeed: </strong>{weather.wind?.speed ? `${weather.wind.speed} Knots` : "No wind data"}</li>
<li><strong>Windspeed Gusts: </strong>{weather.wind?.gust ? `${weather.wind.gust} Knots` : "No gust data"}</li>    
</ul>
 
<!--popup alert system-->
{#if showModal}
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                ⚠ Flood Warning!
            </div>
            <div class="modal-body">
                <span class="warning-icon">⚠</span>
                <p>Heavy rainfall detected. Possible flooding in your area. Stay safe and take precautions.</p>
            </div>
            <button class="close-btn" on:click={closeModal}>Got It</button>
        </div>
    </div>
{/if}
</section>
 
<style>

select, option {
    color: black;
    background-color: white;
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
}

 
    /* Modal styling */
    .modal {
        display: flex;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.5s;
    }
 
    .modal-content {
        background-color: #fff;
        padding: 20px;
        border: 1px solid #888;
        width: 90%;
        max-width: 400px;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0px 0px 10px #333;
        animation: slideIn 0.5s;
    }
 
    .modal-header {
        font-size: 20px;
        font-weight: bold;
        color: red;
    }
 
    .modal-body {
        margin: 15px 0;
        font-size: 16px;
    }
 
    .warning-icon {
        font-size: 40px;
        color: red;
    }
 
    .close-btn {
        background-color: red;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
 
    .close-btn:hover {
        background-color: darkred;
    }
 
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
 
    @keyframes slideIn {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
 
</style>
 