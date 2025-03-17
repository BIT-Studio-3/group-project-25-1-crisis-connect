<script>
  import { onMount } from "svelte";

  let weather = {};
  const cities = [
    { name: "Auckland", lat: -36.8485, lon: 174.7633 },
    { name: "Hamilton", lat: -37.787, lon: 175.2793 },
    { name: "Tauranga", lat: -37.6878, lon: 176.1651 },
    { name: "Napier", lat: -39.4928, lon: 176.912 },
    { name: "Wellington", lat: -41.2865, lon: 174.7762 },
    { name: "Nelson", lat: -41.2706, lon: 173.284 },
    { name: "Christchurch", lat: -43.5321, lon: 172.6362 },
    { name: "Dunedin", lat: -45.8666, lon: 170.519 },
  ];
  let selectedCity = cities[7].name;

  async function fetchWeather(cityName) {
    const city = cities.find((c) => c.name === cityName);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=82336dbf0297a6e4f7502d515fcbad51&units=metric`
    );
    weather = await res.json();
  }

  onMount(() => {
    fetchWeather(selectedCity);
  });
</script>

<section>
  <h2>Current Weather</h2>
  <label for="city">Choose a city:</label>
  <select
    id="city"
    bind:value={selectedCity}
    on:change={() => fetchWeather(selectedCity)}
  >
    {#each cities as city}
      <option value={city.name}>{city.name}</option>
    {/each}
  </select>
  <ul>
    <li>
      <strong>Location: </strong>{weather.name
        ? weather.name
        : "No location data"}
    </li>
    <li>
      <strong>Temperature: </strong>{weather.main?.temp
        ? `${weather.main.temp} °C`
        : "No temperature data"}
    </li>
    <li>
      <strong>Humidity: </strong>{weather.main?.humidity
        ? `${weather.main.humidity} %`
        : "No humidity data"}
    </li>
    <li>
      <strong>Pressure: </strong>{weather.main?.pressure
        ? `${weather.main.pressure} Pa`
        : "No pressure data"}
    </li>
    <li>
      <strong>Windspeed: </strong>{weather.wind?.speed
        ? `${weather.wind.speed} Knots`
        : "No wind data"}
    </li>
    <li>
      <strong>Windspeed Gusts: </strong>{weather.wind?.gust
        ? `${weather.wind.gust} Knots`
        : "No gust data"}
    </li>
  </ul>
</section>

<style>
  select {
    background-color: #0c2d48; /* Dark Blue */
    color: #fff;
    border: 1px solid #2e8bc0; /* Blue */
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    font-size: 16px;
  }
  select:focus {
    outline: none;
    border-color: #b1d4e0; /* Baby Blue */
  }

  label {
    font-size: 18px;
    color: #b1d4e0;
  }
</style>
