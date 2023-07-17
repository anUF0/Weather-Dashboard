const apiKey = '055b3d12f20ab467916355aefa4d41a3';
const cityListEl = $('#city-list');
const cityName = JSON.parse(localStorage.getItem('storedCities'))[0];
const storedCities = [];

//API URLS
const URLWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey +'&units=metric';
const URLForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey +'&units=metric';

function recordCity(){

const input = document.getElementById('input').value.trim();
if (input === "") {
    return;
  }
storedCities.push(input);
input.value = "";
localStorage.setItem('storedCities', JSON.stringify(storedCities));
}

function renderCities(){
for (var i = 0; i < JSON.parse(localStorage.getItem('storedCities')).length; i++) {
    const storedCities = JSON.parse(localStorage.getItem('storedCities'));
    cityListEl.append('<li>' + storedCities + '</li>');
}
}

// Current Day Forecast function
$.ajax ({
    url: URLWeather,
    method: "GET"
})
    .then(function(response) {

        // Add weather info to page
        $('.city').html("<h2>" + response.name + "</h2>");
        $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
        $('.wind').text("Wind Speed: " + response.wind.speed + " MPH");
        $('.humidity').text("Humidity: " + response.main.humidity + "%");
        $(".temperature").text("Temperature: " + response.main.temp + " C");
    });

// Displays the date
const currentDay = dayjs().format("dddd, MMMM D");

function getDay() {
    $(".current-date").text(currentDay);
};

function init(){
    getDay();
    renderCities();
}

$.ajax ({
    url: URLForecast,
    method: "GET"
})

    .then(function (response) {

        const dayOne = dayjs(response.list[0].dt_txt).format("ddd, MMM D");

        // Adds day 1 data to page
        $(".day-one-temperature").text("Temp: " + response.list[0].main.temp + " C");
        $(".day-one-date").html("<h6>" + dayOne + "</h6>");
        $(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-one-humidity").text("Humidity: " + response.list[0].main.humidity + "%");

        const dayTwo = dayjs(response.list[8].dt_txt).format("ddd, MMM D");
        // Adds day 2 data to page
        $(".day-two-temperature").text("Temp: " + response.list[8].main.temp + " C");
        $(".day-two-date").html("<h6>" + dayTwo + "</h6>");
        $(".day-two-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-two-humidity").text("Humidity: " + response.list[8].main.humidity + "%");

        const dayThree = dayjs(response.list[16].dt_txt).format("ddd, MMM D");
        // Adds day 3 data to page
        $(".day-three-temperature").text("Temp: " + response.list[16].main.temp + " C");
        $(".day-three-date").html("<h6>" + dayThree + "</h6>");
        $(".day-three-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-three-humidity").text("Humidity: " + response.list[16].main.humidity + "%");

        const dayFour = dayjs(response.list[24].dt_txt).format("ddd, MMM D");

        // Adds day 4 data to page
        $(".day-four-temperature").text("Temp: " + response.list[24].main.temp + " C");
        $(".day-four-date").html("<h6>" + dayFour + "</h6>");
        $(".day-four-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-four-humidity").text("Humidity: " + response.list[24].main.humidity + "%");

        const dayFive = dayjs(response.list[32].dt_txt).format("ddd, MMM D");

        // Adds day 5 data to page
        $(".day-five-temperature").text("Temp: " + response.list[32].main.temp + " C");
        $(".day-five-date").html("<h6>" + dayFive + "</h6>");
        $(".day-five-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-five-humidity").text("Humidity: " + response.list[32].main.humidity + "%");

    });

init();