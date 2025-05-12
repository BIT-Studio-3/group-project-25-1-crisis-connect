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
 
    const view = new MapView({
      container: mapContainer,
      map: {
        basemap: "streets-vector",
        layers: [wmtsLayer, graphicsLayer],
      },
      zoom: 13,
      center: [170.51952093430864, -45.86587714349185],
    });

    const homeWidget = new Home({ view });
    view.ui.add(homeWidget, "top-left");

    const points = [
      { coords: [170.5195, -45.8659], label: "Otago Polytech" },
      { coords: [170.5196, -45.8652], label: "Vaughn Attack" },
      { coords: [170.4958, -45.8804], label: "OtagoCDEM" },
      { coords: [170.5020, -45.8744], label: "Emergency Operations Centre" },
      { coords: [170.32762846702468, -45.94930979874042], label: "Brighton Hall" },
      { coords: [170.62147469142226, -45.84871779750973], label: "Broad Bay Community Centre" },
      { coords: [170.50294148580366,-45.87285713658329], label: "Dunedin Town Hall" },
      { coords: [170.50297628403, -45.87337915409424], label: "Dunedin Centre" },
      { coords: [170.38776715568994, -45.8768017971585], label:"Zombie Attack"},
      { coords: [170.56150302579226, -45.87123707844707], label: "Shark Attack"},
    ];

    points.forEach(({ coords, label }) => {
      const point = new Point({ longitude: coords[0], latitude: coords[1] });

      // Red Marker Symbol
      const pointSymbol = {
        type: "picture-marker", 
        url: "/Images/pin2.png",
        width: "24px", 
        height: "40px",
        
      };

      // Add the point as a graphic with red marker symbol
      graphicsLayer.add(new Graphic({
        geometry: point,
        symbol: pointSymbol
      }));

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