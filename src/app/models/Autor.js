import Sequelize, { Model } from 'sequelize'

class Autor extends Model{
    static init(sequelize){
        super.init({
            nome : Sequelize.STRING,
            descricao : Sequelize.STRING,
        },{
            sequelize,
            tableName : 'autores'
        })
    }

    static associate(models){
        this.hasMany(models.Livro)
    }
}
export default Autor