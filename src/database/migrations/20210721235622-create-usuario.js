'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
      },
      nome : {
        type : Sequelize.STRING,
        allowNull : false,
      },
      email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      senha : {
        type : Sequelize.STRING,
        allowNull : false,
      },
      created_at : {
        type : Sequelize.DATE,
        allowNull : false
      },
      updated_at : {
        type : Sequelize.DATE,
        allowNull : false
      }
    })
  },

  down: async queryInterface => {
    await queryInterface.dropTable('ususarios')
  }
};
