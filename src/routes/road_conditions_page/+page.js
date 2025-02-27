let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.04924594193164, lng: -118.24104309082031 },
    zoom: 13,
  });

  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

async function loadGoogleMaps() {
  //GOT THIS FROM CHATGPT |
  //                      V
  if (typeof google !== "undefined" && google.maps) {
    initMap();
  } else {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=traffic&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
  // ________________________________
}

loadGoogleMaps();
