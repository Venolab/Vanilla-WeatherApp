function formatDate(timestamp) {
  let date = new date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = (document.querySelector = "#humidity");
  let windElement = (document.querySelector = "#wind");
  let dateElement = (document.querySelector = "#date");
  let iconElement = (document.querySelector = "#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.main.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data, wind.speed);
  DataElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("Alt,response.data.weather[0].description");
}

function search(city) {
  let apikey = "e3015a327d1663bfa913f4b1041aef6e";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}&units=metrics`;
  axiox.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function fahrenheitLink(event) {
  event.preventDefault();
  let temperatureElement = Document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let FahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  alert(FahrenheitTemperature);
  temperatureElement.innerHTML = Math.round(FahrenheitTemperature);
}

function celsiusTemperature(event) {
  event.preventDefault;
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = Document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function WeatherForecastPreview(event) {
  event.preventDefault;
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayfahrenheitTemperature);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displaycelsiusTemperature);

let WeatherForecastPreview = `api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`;

search("New York");
