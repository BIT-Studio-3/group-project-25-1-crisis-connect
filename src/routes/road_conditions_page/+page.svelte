<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.initMap = function () {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 34.04924594193164, lng: -118.24104309082031 },
      });
      const trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=traffic&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });
</script>

<div id="map" style="height: 500px;"></div>
