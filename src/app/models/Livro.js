import Sequelize , { Model } from 'sequelize'

class Livro extends Model{
    static init(sequelize){
        super.init({
            titulo : Sequelize.STRING,
            sinopse : Sequelize.STRING,
            edicao : Sequelize.INTEGER,
            genero : Sequelize.ENUM('Suspense','Ação','Terror','Romance','Fantasia'),
            ano_publicacao : Sequelize.INTEGER
        },{
            sequelize,
        })
    }

    static associate(models){
        this.belongsTo(models.Autor, {foreignKey : 'autor_id'})
        this.belongsTo(models.Editora, {foreignKey : 'editora_id'})
    }
}
export default Livro