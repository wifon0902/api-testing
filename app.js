import { config } from './config.js';

const API_KEY = config.API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=California&units=metric&appid=${API_KEY}`;

let city;

fetch(API_URL)
  .then((res) => res.json())
  .then((weatherRaw) => {
    city = {
      name: weatherRaw.name,
      country: weatherRaw.sys.country,
      temp: weatherRaw.main.temp,
      humidity: weatherRaw.main.humidity,
      sunrise: weatherRaw.sys.sunrise,
      sunshine: weatherRaw.sys.sunset,
      weather: weatherRaw.weather.main,
      weatherDesc: weatherRaw.weather.description,
    };
    console.log(city.temp);
  });

// async function checkWeather (){
//   const response = await fetch(API_URL + `&appid=${API_KEY}`);
//   let data = await response.json();

//   console.log(data);
// }

// checkWeather();

      // name: city.name,
      // country: city.sys.country,
      // temp: city.main.temp,
      // humidity: city.main.humidity,
      // sunrise: city.sys.sunrise,
      // sunshine: city.sys.sunset,
      // weather: city.weather.main,
      // weatherDesc: city.weather.description,