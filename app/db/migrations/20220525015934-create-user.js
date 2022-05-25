'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      address: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      cash1: {
        type: Sequelize.FLOAT
      },
      cash2: {
        type: Sequelize.FLOAT
      },
      cash3: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Users');
  }
};