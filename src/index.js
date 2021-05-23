function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.main.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = (document.querySelector = "#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
}

let = "e3015a327d1663bfa913f4b1041aef6e";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}&units=metrics`;
axiox.get(apiUrl).then(displayTemperature);
