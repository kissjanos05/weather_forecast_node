# Welcome to Weather app!

## Installation
Before installing download and install [Node.JS](https://nodejs.org/en/download/) and MySQL. 5.7 or higher is required.

    git clone https://github.com/kissjanos05/weather_forecast_node

   Copy these .example file to the same directory whitout .example extenson:
   
> config/config.json.example -> config/config.json.example
> config/db.config.js.example -> config/db.config.js
> config/open_weather_api_config.js.example -> config/open_weather_api_config.js

Run 

> npm install

Create a MySQL database and user for the application

## Configuration

## OpenWeather API
Set you OpenWeather API key in
**open_weather_api_config.js**

    module.exports = { 
      appid: '123456789abcdefghijk'
    }

**Database configuration for the migrations and seed**
You can add several configurations for you environments
**config.json**

    { "development":
      {
        "host": "localhost",
        "username": "dev_db_user",
        "password": "dev_password",
        "database": "dev_db",
        "dialect": "mysql"
      },
      "production": {
	    "host": "prod_db_host",
	    "username": "prod_db_user",
        "password": "prod_password",
        "database": "prod_db",
        "dialect": "mysql"
      }
    }

## Database configuration for the application
**db.config.js**

    module.exports = { 
      HOST: "localhost",
      USER: "db_user",
      PASSWORD: "db_password",
      DB: "mydb",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    };

## Database migration and seed
Run the following commands
for create DB tables:

>  npx sequelize-cli db:migrate

for populate Cities table:

> npx sequelize-cli db:seed:all
## Start the application

Development mode:

> npm run dev

Production mode:

> npm run start


