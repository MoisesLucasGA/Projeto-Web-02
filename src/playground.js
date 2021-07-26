import './database'
import Livro from './app/models/Livro'
import Autor from './app/models/Autor'
import Editora from './app/models/Editora'

class Playground{
    static async generoLivro(txt){
        try {
            //const genero = 'Suspense'
            const livro = await Livro.findAll({
                where : {
                    genero : txt
                },
                attributes : {
                    exclude : ['id','sinopse','edicao','ano_publicacao','createdAt','updatedAt','AutorId','EditoraId']
                }
            })
            console.log(JSON.stringify(livro,null,2))

        } catch (error) {
            console.log(error);
        }
    }

    static async find(id){
        try {
            //const id = 1
            const livro = await Livro.findByPk(id,{
                include : [{
                    model : Autor,
                    attributes : {
                        exclude : ['id','descricao','createdAt','updatedAt']
                    }
                },{
                    model : Editora,
                    attributes : {
                        exclude : ['id','descricao','createdAt','updatedAt']
                    }
                }]
            })

            console.log(JSON.stringify(livro,null,2))

        } catch (error) {
            console.log(error)
        }
    }
}
//Playground.generoLivro('Suspense')
//Playground.find(2)