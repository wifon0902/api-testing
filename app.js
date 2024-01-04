import API_KEY from './apikey.js';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Radomsko&units=metric';

async function checkWeather (){
  const response = await fetch(API_URL + `&appid=${API_KEY}`);
  let data = await response.json();

  console.log(data);
}

checkWeather();