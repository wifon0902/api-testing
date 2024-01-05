import { config } from './config.js';

const API_KEY = config.API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Radomsko&units=metric&appid=${API_KEY}`;

let weather;

fetch(API_URL)
  .then((res) => res.json())
  .then((weatherRaw) => console.log(weatherRaw.name));

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