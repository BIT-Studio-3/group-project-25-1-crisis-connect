/*export async function load ({fetch}) {
    const response = await fetch('https://forecast-docs.metoceanapi.comhttps://forecast-docs.metoceanapi.com');
    const weather = await response.json();
    return {weather};
}
// USE TOMTOM FOR API'S, SWITCH CODE AROUND TO FIT TRAFFIC API, CREATE PAGE FOR TRAFFIC DATA, INCLUDING DROP DOWN MENU/ACCORDIANS
let url = 'https://forecast-v2.metoceanapi.com/point/time'

// This is a very simple request, with no post-processing in this example
let data = {
  points: [{lon: 174.7842, lat: -37.7935}],
  variables: ['wave.height'],
  time: {
    from: new Date().toISOString(),
    interval: '3h',
    repeat: 3,
  }
}

export let pointTime = { url, data }*/


/*
export async function load({ fetch }){
  const APIkey= '5ba45f413c95bf1cfa9728d94050d574';
  const cityname ='Dunedin';
  const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityname}&appid=${APIkey}`);
  if (!response.ok) {
    console.error('Failed to fetch weather data', response.status, await response.text());
    throw new Error('Failed to fetch weather data');
  }
  return {weather};
}
const lat = 35.6895;  // Tokyo latitude
const lon = 139.6917; // Tokyo longitude
const cnt = 7;        // 7-day forecast
const apikey = 'e69bc6b44793a289b77bb292cb1146fc';  // Your API key

const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apikey}`);
const weatherData = await response.json();

console.log(weatherData);*/

export async function load({ fetch }){
  const apikey = '240eeb6bd82941cda5b223231250203'; // Declare the API key
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=Dunedin&aqi=no`);
  
const data = await response.json();
return {data};
}
