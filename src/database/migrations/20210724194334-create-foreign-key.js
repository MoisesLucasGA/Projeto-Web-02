'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('livros','autor_id',{
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'autores', key : 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      })
      await queryInterface.addColumn('livros', 'editora_id',{
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'editoras', key : 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      })
    } catch (error) {
      
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.removeColumn('livros', 'autor_id', {transaction})
      await queryInterface.removeColumn('livros', 'editora_id', {transaction})
    })
  }
};
