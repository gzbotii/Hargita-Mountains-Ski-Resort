// Fetch the data
function weatherBalloon(cityID) {
  var key = "{417cdd67ef0bf08e08a07a43a038ad98}";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=676309&APPID=417cdd67ef0bf08e08a07a43a038ad98"
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
    });
}

window.onload = function () {
  weatherBalloon(676309);
};

// Insert the data
function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("description").innerHTML = d.weather[0].description;
}
