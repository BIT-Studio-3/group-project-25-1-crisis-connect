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

  onMount(async () => {
    if (typeof window === 'undefined') return; // Skip SSR

    // Dynamically import ArcGIS modules
    const MapView = (await import("@arcgis/core/views/MapView")).default;
    const Graphic = (await import("@arcgis/core/Graphic")).default;
    const GraphicsLayer = (await import("@arcgis/core/layers/GraphicsLayer")).default;
    const Point = (await import("@arcgis/core/geometry/Point")).default;
    const WMTSLayer = (await import("@arcgis/core/layers/WMTSLayer")).default;
    const Home = (await import("@arcgis/core/widgets/Home")).default;
    await import("@arcgis/core/assets/esri/themes/light/main.css");

    const graphicsLayer = new GraphicsLayer();

    const wmtsLayer = new WMTSLayer({
      url: "https://data.linz.govt.nz/services;key=846b31609e5947cfb627eb8135b8e9a3/wmts/1.0.0/layer/50767/WMTSCapabilities.xml",
      subdomains: ["a", "b", "c", "d"],
    });
 
    // Add a marker which pops up when u click on the marker
    L.marker([-45.865963211874174, 170.5189969281258]).addTo(map)
      .bindPopup("You are here :)")
      .openPopup();
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<section>
<div id="map" bind:this={mapContainer}></div>
</section>

<style>
#map {
  width: 100%;
  height: 600px;
}

@media (max-width: 768px) {
  #map {
    height: 400px;
  }
}

</style>