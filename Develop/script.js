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
var api = "4361959541047617a16f6a917f159060"


// function to display weather

function displayWeather() {
    event.preventDefault()
    var cityName = cityEl.value
    var urlCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}'
}

fetch (urlCurrentWeather)
.then(function(response){
    return response.json()
})

.then(function (currentData) {
    console.log(currentData)
    var fiveDayWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude={part}&appid=${api}'
})


// addEventListener on submit and create a dashboard function
cityFormEl.addEventListener("submit", displayWeather)
