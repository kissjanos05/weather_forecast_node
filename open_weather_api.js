const express = require('express')
const axios = require('axios');
const querystring = require('node:querystring');
const apiConfig = require('./config/open_weather_api_config.js')
const languageUnitMapping = require('./i18n/language_unit_mapping.js')

exports.getCurrentWeather = function(city, lang){
  var query = {
    lat: city.lat,
    lon: city.lon,
    units: languageUnitMapping[lang],
    lang: lang,
    appid: apiConfig['appid']}
  var weather = axios.get('https://api.openweathermap.org/data/2.5/weather?' + querystring.encode(query))
  .then(response => {
    return(response['data'])
  })
  .catch(error => {
    console.log(error);
  });
  return weather
}
