import { config } from './config.js';

const API_KEY = config.API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Jezow&units=metric&appid=${API_KEY}`;

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
    console.log(weatherRaw);
  });