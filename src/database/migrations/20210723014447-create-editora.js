'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('editoras', {
      id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
      },
      nome : {
        type : Sequelize.STRING,
        allowNull : false
      },
      descricao : {
        type : Sequelize.TEXT,
        allowNull : false
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
    await queryInterface.dropTable('editoras')
  }
};
