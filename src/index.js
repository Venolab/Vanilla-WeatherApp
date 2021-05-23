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
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.main.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data, wind.speed);
  DataElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("Alt",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)=
}

let apikey = "e3015a327d1663bfa913f4b1041aef6e";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}&units=metrics`;

axiox.get(apiUrl).then(displayTemperature);
