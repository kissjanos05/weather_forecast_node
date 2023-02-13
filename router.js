const express = require('express')
const router = express.Router()
const { Sequelize, Op } = require("sequelize");
const moment = require('moment')
const db = require("./db.js");
const City = db.City
const Weather = db.Weather
const openWeatherApi = require('./open_weather_api.js')

router.get('/', function(req, res, next){
  City.findAll().then(function(data){
    res.render('form', {cities: data})
  }).catch(next)
})

router.get('/weather', async function(req, res, next){
  try {
    var lang = req.cookies.ulang || 'hu'
    var weather = await Weather.findOne({ where: {lang: lang, cityId: req.query.city_id, createdAt: {[Op.gt]: moment().subtract(10, 'minutes').toDate()}} })
    var city = await City.findByPk(req.query.city_id)
    if(!weather){
      var openWeatherData = await openWeatherApi.getCurrentWeather(city, lang)
      weather = await Weather.create({
        cityId: req.query.city_id,
        temp: openWeatherData['main']['temp'],
        pressure: openWeatherData['main']['pressure'],
        humidity:  openWeatherData['main']['humidity'],
        cloudiness: openWeatherData['clouds']['all'],
        windSpeed: openWeatherData['wind']['speed'],
        windDeg: openWeatherData['wind']['deg'],
        weatherMain: openWeatherData['weather'][0]['main'],
        weatherDescription: openWeatherData['weather'][0]['description'],
        weatherIconCode: openWeatherData['weather'][0]['icon'],
        lang: lang
      })
    }
    res.render('weather', {weather: weather, city: city})
  } catch(error) {
    next(error)
  }
})

module.exports = router
