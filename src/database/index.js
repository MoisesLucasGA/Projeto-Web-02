import Sequelize from "sequelize"
import config from "../config/database"
import Usuario from "../app/models/Usuario"
import Autor from "../app/models/Autor"
import Editora from "../app/models/Editora"
import Livro from "../app/models/Livro"

const models = [Usuario,Autor,Editora,Livro]

class Database{
    constructor(){
        this.connection = new Sequelize(config)

        this.init()
        this.associate()
    }

    init(){
        models.forEach(model => model.init(this.connection))
    }
    associate(){
        models.forEach(model => {
            if (model.associate){
                model.associate(this.connection.models)
            }
        })
    }
}

export default new Database()