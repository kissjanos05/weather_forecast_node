'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {name: 'Budapest', lat: '47.497912', lon: '19.0402349'},
      {name: 'Győr', lat: '47.687208750610715', lon: '17.65662342386634'},
      {name: 'Debrecen', lat: '47.531483498901224', lon: '21.60931815901334'},
      {name: 'Miskolc', lat: '48.105184306764905', lon: '20.772564783453237'},
      {name: 'Pécs', lat: '46.0717573713497', lon: '18.232383662841592'},
      {name: 'Sopron', lat: '47.68179569608377', lon: '16.587087797342743' },
      {name: 'Szeged', lat: '46.25264875236795', lon: '20.131535492781943' },
      {name: 'Gyékényes', lat: '46.241434379471414', lon: '16.99471400519155' }
    ], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cities', null, {});
  }
};
