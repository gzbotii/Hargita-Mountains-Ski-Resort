function initMap() {
  const hr = { lat: 46.385066, lng: 25.659792 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: hr,
  });
  const marker = new google.maps.Marker({
    position: hr,
    map: map,
  });
}

//window.onload = initMap();

window.initMap = initMap;
