'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Weathers', 'lang', {
          type: Sequelize.DataTypes.STRING,
          after: 'weatherIconCode'
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Weathers', 'lang', { transaction: t }),
      ]);
    });
  }
};
