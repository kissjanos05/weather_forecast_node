//A Celsius értéket oszd el 5-tel (C/5).
//Az így kapott értéket szorozd meg 9-cel (C/5*9).
//A kapott értékhez adj hozzá 32-t, és megkaptad a Fahrenheit értéket (F=C/5*9+32).

'use strict';
const moment = require('moment')
moment.locale('hu')

const directions = [ 'É', 'ÉK', 'K', 'DK', 'D', 'DNy', 'Ny', 'ÉNy' ]

const iconMapping = {
  '01d': 'bi-sun',
  '01n': 'bi-moon-stars-fill',
  '02d': 'bi-cloud-sun',
  '02n': 'bi-cloud-moon-fill',
  '03d': 'bi-cloud',
  '03n': 'bi-cloud-fill',
  '04d': 'bi-clouds',
  '04n': 'bi-clouds-fill',
  '09d': 'bi-cloud-rain-heavy',
  '09n': 'bi-cloud-rain-heavy-fill',
  '10d': 'bi-cloud-rain',
  '10n': 'bi-cloud-rain-fill',
  '11d': 'bi-cloud-lightning',
  '11n': 'bi-cloud-lightning-fill',
  '13d': 'bi-cloud-snow',
  '13n': 'bi-cloud-snow-fill',
  '50d': 'bi-cloud-fog',
  '50n': 'bi-cloud-fog-fill',
}

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Weather.init({
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    temp: {
      type: DataTypes.FLOAT(3,2)
    },
    formattedTemp: {
      type: DataTypes.VIRTUAL,
      get() {
        return Math.round(this.temp) + '&deg;C'
      }
    },
    pressure: {
      type: DataTypes.INTEGER,
    },
    humidity: {
      type: DataTypes.INTEGER
    },
    cloudiness: {
      type: DataTypes.INTEGER
    },
    windSpeed: {
      type: DataTypes.FLOAT(3,2)
    },
    windDeg: {
      type: DataTypes.INTEGER
    },
    formattedWindDeg: {
      type: DataTypes.VIRTUAL,
      get() {
        let section = parseInt( this.windDeg/45 + 0.5 )
        section = section % 8;
        return directions[section]
      }
    },
    weatherMain: {
      type: DataTypes.STRING
    },
    weatherDescription: {
      type: DataTypes.STRING
    },
    weatherIconCode: {
      type: DataTypes.STRING
    },
    iconClass: {
      type: DataTypes.VIRTUAL,
      get() {
        return iconMapping[this.weatherIconCode]
      }
    },
    lang: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    formattedCreatedAt: {
      type: DataTypes.VIRTUAL,
      get() {
        return moment(this.created_at).format('LLLL')
      }
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Weather',
    tableName: 'Weathers'
  });
  return Weather;
};
