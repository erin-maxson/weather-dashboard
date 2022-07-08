// define all html static selectors
var cityEl = document.querySelector("#citySearchText2")
var cityFormEl = document.querySelector("#city-form")
var saveSearchEl = document.querySelector("#recentSearch")

// city big card info
var cityHeaderEl = document.querySelector("#city-header")
var tempEl = document.querySelector("#temp")
var windEl = document.querySelector("#wind")
var humidEl = document.querySelector("#humidity")
var uvEl = document.querySelector("#uv")

// city 5 day forecast cards
var fiveDayEl = document.querySelector(".row")
var cityDay1 = document.querySelector("#city-header-card-1")
var cityNameEl = document.querySelector("#card-title")
var cardTemp = document.querySelector("#tempCard")
var cardWind = document.querySelector("#windCard")
var cardHumidity = document.querySelector("#humidityCard")
var cardUV = document.querySelector("#uvCard")

// API Key
var api = 'b9ed88a608928d0800d199dca396e9ad'

// search + save
// when a user inputs a city name, it is stored in local storage
// the city name is also added to the list of previous searches

console.log(cityEl)
localStorage.getItem("city", cityEl.textContent)
localStorage.setItem("city", cityEl.textContent)


// function to display weather to big card
function displayWeather() {
    event.preventDefault()
    var cityName = cityEl.value
    var urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${api}`

    fetch(urlCurrentWeather)
        .then(function (response) {
            return response.json()
        })

        .then(function (currentData) {
            console.log(currentData)
            var fiveDayWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&units=imperial&exclude={part}&appid=${api}`

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
        var cityName = cityNameEl.value
        var urlFiveDayWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api}`


        fetch(urlFiveDayWeather)
        .then(function (response) {
            return response.json()
        })
    }

    //     .then(function (fiveDayData) {
    //         console.log(fiveDayData)

    //         for ( i = 0; i < 5; i++) {
    //             var forecastCard = document.createElement('div')
    //             fiveDayEl.setAttribute('class', 'forecastCard'),
    //         fiveDayEl.innerHTML = 
    //         `<div class="col-sm-2">
    //             <div class="card">
    //                 <div class="card-body">
    //                     <h5 class="card-title city-header city-header-card-1">Phoenix (06/15/2022)</h5>,
    //                     <p class="temp">Temp: <span id="tempCard">`${fiveDayData.daily[i].temp.day}`</span>ºF</p>,
    //                     <p class="wind">Wind: <span id="windCard">`${fiveDayData.daily[i].wind.speed}`</span>MPH</p>,
    //                     <p class="humidity">Humidity: <span id="humidityCard">`${fiveDayData.daily[i].humidity}`</span>%</p>,
    //                     <p class="uv">UV Index: <span id="uvCard">`${fiveDayData.daily[i].uvi}`</span></p>
    //                 </div>
    //             </div>
    //         </div>
    //         }
    //     })
    // }`


    // addEventListener on submit and create a dashboard function
    cityFormEl.addEventListener("submit", displayWeather)
