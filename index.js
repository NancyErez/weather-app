let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let time = day + ", " + now.getHours() + ":" + now.getMinutes();

document.getElementById("day-time").innerHTML = time;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let citySearch = searchInput.value;
  if (citySearch) {
    let locationElement = document.querySelector("h1");
    locationElement.innerHTML = `${citySearch}`;
    let apiKey = "a757d83b2e8ebab0f72d4f78399a6c58";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  } else {
    alert("Please enter a location");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response);

  let tempLog = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${tempLog}°c`;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `Wind: ${response.data.wind.speed}m/s`;
}
