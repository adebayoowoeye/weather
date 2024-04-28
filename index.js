document.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector(".container");
const search = document.querySelector(".search-button");
const weatherBox = document.querySelector(`.weather-box`);
const weatherDetails = document.querySelector(`.weather-details`);
const cityName = document.querySelector(`.city-name`);


search.addEventListener("click", async () => {
    const APIkey = "b824469c535af761fa7d32c22a48b0f3";
    const city = document.querySelector('.search-box input').value;
    console.log(city);
    console.log("I was here");

    if (city === "") {
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`);
        const json = await response.json();

        const image = document.querySelector(".weather-box .weather img");
        const temperature = document.querySelector(".weather-box .temperature");
        const description = document.querySelector(".weather-box .description");
        const humidity = document.querySelector(".weather-details .humidity span");
        const wind = document.querySelector(".weather-details .wind span");

        switch (json.weather[0].main) {
            case "Clear":
                image.src = "img/clear.png";
                break;
            case "Rain":
                image.src = "img/rain.png";
                break;
            case "Snow":
                image.src = "img/snow.png";
                break;
            case "Clouds":
                image.src = "img/cloud2.png";
                break;
            case "Mist":
            case "Haze":
                image.src = "img/mist.png";
                break;
            default:
                image.src = "img/cloud.png";
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
    }
})
});

function printcity(){

    
    if(city ===""){
       cityName.innerHTML = city;
    }
    else{
        return "Your Location is not found"
    }
}

printcity();