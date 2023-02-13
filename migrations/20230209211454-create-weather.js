'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Weathers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      temp: {
        type: Sequelize.FLOAT(5,2)
      },
      pressure: {
        type: Sequelize.INTEGER,
      },
      humidity: {
        type: Sequelize.INTEGER
      },
      cloudiness: {
        type: Sequelize.INTEGER
      },
      windSpeed: {
        type: Sequelize.FLOAT(3,2)
      },
      windDeg: {
        type: Sequelize.INTEGER
      },
      weatherMain: {
        type: Sequelize.STRING
      },
      weatherDescription: {
        type: Sequelize.STRING
      },
      weatherIconCode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Weathers');
  }
};
