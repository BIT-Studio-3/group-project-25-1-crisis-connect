<script>
//I have downloaded the dependencies of leaflet using
  //npm install leaflet in the git bash
  //Importing leaflet 'L' from the downloaded dependency with its css
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
//Import the onMount function from the Svelte
  import { onMount } from "svelte";
  //Declaring the 'let' variable to hold reference of the map container
  let mapContainer;
  //Ensure it runs after the component is mounted in DOM
  onMount(() => {
    //Ive set the view to show the polytechnic
    const map = L.map(mapContainer).setView([-45.865963211874174, 170.5189969281258], 13);
 
    // Adding OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
 
    // Add a marker which pops up when u click on the marker
    L.marker([-45.865963211874174, 170.5189969281258]).addTo(map)
      .bindPopup("You are here :)")
      .openPopup();
  });    
</script>
<<<<<<< HEAD

<!-- svelte-ignore a11y-missing-attribute -->
<html>
  <head>
    <title>Simple Map</title>
  </head>
  <body>
    <h1>road_conditions_page</h1>

  </body>
</html>
=======
 
<style>
  #map {
    text-align: center;
    width: 100%;
    height: 800px;
  }
</style>
<section>
<div id="map" bind:this={mapContainer}></div>
</section>
>>>>>>> 982d5638b4c5c6a7a54e3eaac70d02c9fe40543c
