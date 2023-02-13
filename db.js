const dbConfig = require("./config/db.config.js");

const { Sequelize, Op } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.City = require("./models/city.js")(sequelize, Sequelize);
db.Weather = require("./models/weather.js")(sequelize, Sequelize, Op);

module.exports = db;
