import Autor from "../models/Autor"
class AutorController{

    async index(req,res){
        try {
            const autor = await Autor.findAll()
            const status = autor ? 200 : 404

            return res.status(status).json(autor)
        } catch (error) {
            console.log(error)
        }
    }

    async find(req,res){
        try {
            const id = parseInt(req.params.id)
            const autor = await Autor.findByPk(id)
            const status = autor ? 200 : 404

            return res.status(status).json(autor)
        } catch (error) {
            console.log(error)
        }
    }
    async create(req,res){
        try {
            const {nome, descricao} = req.body
            const novoAutor = await Autor.create({
                nome, descricao
            })

            const status = novoAutor ? 200 : 404
            
            return res.status(status).json(novoAutor)
        } catch (error) {
            console.log(error)
        }
    }

    async update(req,res){
        try {
            const id = parseInt(req.params.id)
            const {nome,descricao} = req.body
            const autor = await Autor.findByPk(id)

            const status = autor ? 200 : 404
            const novoAutor = await autor.update({
                nome,descricao
            })

            return res.status(status).json(novoAutor)

        } catch (error) {
            console.log(error)
        }
    }

    async delete(req,res){
        try {
            const id = parseInt(req.params.id)
            const autor = await Autor.findByPk(id)
            const status = autor ? 200 : 404
            
            autor.destroy()
            return res.status(status)
        } catch (error) {
            console.log(error)
        }
    }
}
export default new AutorController()