const container = document.querySelector(`.container`);
const search = document.querySelector(".search-box .searchBox button");
const weatherBox = document.querySelector(`.weather-box`);
const weatherDetails = document.querySelector(`.weather-details`);

search.addEventListener(`click`, ()=>{
    const APIkey =`b824469c535af761fa7d32c22a48b0f3`;
    const city= document.querySelector('.search-box input').value;
 console.log(city);

    if(city==``){
        return;
    }
    else{


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response =>response.json()).then(json=>{



            const image = document.querySelector(`.weather-box .weather img`);
            const temperature = document.querySelector(`.weather-box .temperature`);
            const description = document.querySelector(`.weather-box .description`);
            const humidity = document.querySelector(`.weather-details .humidity span`);
            const wind = document.querySelector(`.weather-details .wind span`);
            

            switch (json.weather[0].main) {
                case `Clear`:
                    image.src= `img/clear.png`;

                    break;

                case `Rain`:
                    image.src= `img/rain.png`;
                        break;
                case `Snow`:
                    image.src= `img/snow.png`;
                    break;

                case `clouds`:
                    image.src = `img/cloud2.png`;
                        break;

                case `Mist`:
                    image.src= `img/mist.png`;
                    break;
                case `Haze`:
                    image.src= `img/mist.png`;
                        break;
            
                default:
                    image.src=`img/cloud.png`;
            }
            temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML=`${json.weather[0].description}`;
            humidity.innerHTML=`${json.main.humidity}%`;
            wind.innerHTML=`${parseInt(json.wind.speed)}km/h`;
        }
    
        )
    }
});