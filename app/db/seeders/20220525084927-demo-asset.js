'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Assets', [{      
      type: 1,
      level: 5,
      address: 'TestUser1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {      
      type: 2,
      level: 6,
      address: 'TestUser1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {      
      type: 3,
      level: 7,
      address: 'TestUser1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {      
      type: 1,
      level: 2,
      address: 'TestUser2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Assets', null, {});
  }
};
