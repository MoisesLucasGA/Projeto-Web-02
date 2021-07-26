import Sequelize, { Model } from 'sequelize'

class Editora extends Model{
    static init(sequelize){
        super.init({
            nome : Sequelize.STRING,
            descricao : Sequelize.STRING,
        },{
            sequelize,
            tableName : 'editoras'
        })
    }

    static associate(models){
        this.hasMany(models.Livro)
    }
}
export default Editora