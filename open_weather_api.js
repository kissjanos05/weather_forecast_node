const express = require('express')
const axios = require('axios');
const querystring = require('node:querystring');
const api_config = require('./config/open_weather_api_config.js')

exports.getCurrentWeather = function(city){
  var query = {
    lat: city.lat,
    lon: city.lon,
    units: 'metric',
    lang: 'hu',
    appid: api_config['appid']}
  var weather = axios.get('https://api.openweathermap.org/data/2.5/weather?' + querystring.encode(query))
  .then(response => {
    return(response['data'])
  })
  .catch(error => {
    console.log(error);
  });
  return weather
}
