// define all html static selectors
var cityEl = document.querySelector("#citySearchText")
var cityFormEl = document.querySelector("#city-form")

// city big card info
var cityHeaderEl = document.querySelector("#city-header")
var tempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidEl = document.querySelector("#humidity")
var uvEl = document.querySelector("#uv")

// city 5 day forecast cards
var cityDay1 = document.querySelector("#city-header-card-1")

// API Key
var api = " "


// function to display weather

function displayWeather {
    var cityName = cityEl.value
    var urlCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={api}'
}


// addEventListener on submit and create a dashboard function
cityFormEl.addEventListener("submit", displayWeather)
