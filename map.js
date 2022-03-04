function initMap() {
  const hr = { lat: 46.390857, lng: 25.634466 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: hr,
  });
  const marker = new google.maps.Marker({
    position: hr,
    map: map,
  });
}
