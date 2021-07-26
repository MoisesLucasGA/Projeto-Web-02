import Editora from "../models/Editora"
import Livro from "../models/Livro"
import Autor from "../models/Autor"

class LivroController{
    async index(req,res){
        try {
            const livro = await Livro.findAll()
            const status = livro ? 200 : 404

            return res.status(status).json(livro)
        } catch (error) {
            console.log(error)
        }
    }

    async find(req,res){
        try {
            const id = parseInt(req.params.id)
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
            const status = livro ? 200 : 404

            return res.status(status).json(livro)
        } catch (error) {
            console.log(error)
        }
    }
    async create(req,res){
        try {
            const {titulo, sinopse, genero, edicao, ano_publicacao, autor_id, editora_id} = req.body
            const novoLivro = await Livro.create({
                titulo, sinopse, genero, edicao, ano_publicacao, autor_id, editora_id
            })

            const status = novoLivro ? 200 : 404
            
            return res.status(status).json(novoLivro)
        } catch (error) {
            console.log(error)
        }
    }

    async update(req,res){
        try {
            const id = parseInt(req.params.id)
            const {titulo, sinopse, genero, edicao, ano_publicacao, autor_id, editora_id} = req.body
            const livro = await Livro.findByPk(id)

            const status = livro ? 200 : 404
            const novoLivro = await livro.update({
                titulo, sinopse, genero, edicao, ano_publicacao, autor_id, editora_id
            })

            return res.status(status).json(novoLivro)

        } catch (error) {
            console.log(error)
        }
    }

    async delete(req,res){
        try {
            const id = parseInt(req.params.id)
            const livro = await Livro.findByPk(id)
            const status = livro ? 200 : 404
            
            livro.destroy()
            return res.status(status)
        } catch (error) {
            console.log(error)
        }
    }

    async genero(req,res){
        try {
            const genero = req.params.genero
            const livro = await Livro.findAll({
                where : {
                    genero : genero
                },
                attributes : {
                    exclude : ['id','sinopse','edicao','ano_publicacao','createdAt','updatedAt','AutorId','EditoraId']
                }
            })
            
            const status = livro ? 200 : 404
            return res.status(status).json(livro)

        } catch (error) {
            console.log(error);
        }
    }
}

export default new LivroController()