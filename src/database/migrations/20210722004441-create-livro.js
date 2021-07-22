'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('livros', {
      id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
      },
      titulo : {
        type : Sequelize.STRING,
        allowNull : false,
      },
      sinopse : {
        type : Sequelize.STRING,
        allowNull : false
      },
      edicao : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      genero : {
        type : Sequelize.ENUM('Suspense','Ação','Terror','Romance','Fantasia'),
        allowNull : false
      },
      ano_publicacao : {
        type : Sequelize.INTEGER,
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
    await queryInterface.dropTable('livros')
  }
};
