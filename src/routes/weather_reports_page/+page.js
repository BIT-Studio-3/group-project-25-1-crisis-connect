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

const apiKey = "b3701e9be3304a7a930222848252702";

export async function load({ fetch }){
  
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b3701e9be3304a7a930222848252702&q=London&aqi=no`);
  
    const weather = await response.json();
  return {weather};

}
