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
}
export default Editora