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
}
export default Livro