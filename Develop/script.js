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
var cardTemp = document.querySelector("#tempCard")
var cardWind = document.querySelector("#windCard")
var cardHumidity = document.querySelector("#humidityCard")
var cardUV = document.querySelector("#uvCard")

// API Key
var api = 'b9ed88a608928d0800d199dca396e9ad'


// function to display weather to big card

function displayWeather() {
    event.preventDefault()
    var cityName = cityEl.value
    var urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`

    fetch(urlCurrentWeather)
        .then(function (response) {
            return response.json()
        })

        .then(function (currentData) {
            console.log(currentData)
            var fiveDayWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude={part}&appid=${api}`

            fetch(fiveDayWeather)
                .then(function (response) {
                    return response.json()
                })

                .then(function (fiveDayData) {
                    console.log(fiveDayData)

                    var currentDate = moment.unix(currentData.dt).format("MM/DD/YYYY")

                    cityHeaderEl.textContent = currentData.name + " " + currentDate
                    var iconImage = document.createElement("img")
                    iconImage.setAttribute("src", `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`)
                    tempEl.innerHTML = currentData.main.temp
                    console.log(tempEl.innerHTML)
                    windEl.innerHTML = currentData.wind.speed
                    console.log(windEl.innerHTML)
                    humidEl.innerHTML = currentData.main.humidity
                    console.log(humidEl.innerHTML)
                    uvEl.innerHTML = fiveDayData.current.uvi
                    console.log(uvEl.innerHTML)
                })

        })
 
    };
    
    function updateWeatherCard() {
        event.preventDefault()
        var cityName = cityDay1.value
        var urlFiveDayWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${api}`


        fetch(urlFiveDayWeather)
        .then(function (response) {
            return response.json()
        })

        .then(function (updateWeatherCard) {
            console.log(updateWeatherCard)

            var currentDate = moment.unix(currentData.dt).format("MM/DD/YYYY")

            cityDay1.textContent = currentData.name + " " + currentDate
            var iconImage = document.createElement("img")
            iconImage.setAttribute("src", `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`)
            cardTemp.innerHTML = currentData.main.temp
            cardWind.innerHTML = currentData.wind.speed
            cardHumidity.innerHTML = currentData.main.humidity
            cardUV.innerHTML = fiveDayWeather.current.uvi
        })
    }



    // addEventListener on submit and create a dashboard function
    cityFormEl.addEventListener("submit", displayWeather)
