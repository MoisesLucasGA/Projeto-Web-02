import Editora from "../models/Editora"
class EditoraController{

    async index(req,res){
        try {
            const editora = await Editora.findAll()
            const status = editora ? 200 : 404

            return res.status(status).json(editora)
        } catch (error) {
            console.log(error)
        }
    }

    async find(req,res){
        try {
            const id = parseInt(req.params.id)
            const editora = await Editora.findByPk(id)
            const status = editora ? 200 : 404

            return res.status(status).json(editora)
        } catch (error) {
            console.log(error)
        }
    }
    async create(req,res){
        try {
            const {nome, descricao} = req.body
            const novaEditora = await Editora.create({
                nome, descricao
            })

            const status = novaEditora ? 200 : 404
            
            return res.status(status).json(novaEditora)
        } catch (error) {
            console.log(error)
        }
    }

    async update(req,res){
        try {
            const id = parseInt(req.params.id)
            const {nome,descricao} = req.body
            const editora = await Editora.findByPk(id)

            const status = editora ? 200 : 404
            const novaEditora = await editora.update({
                nome,descricao
            })

            return res.status(status).json(novaEditora)

        } catch (error) {
            console.log(error)
        }
    }

    async delete(req,res){
        try {
            const id = parseInt(req.params.id)
            const editora = await Editora.findByPk(id)
            const status = editora ? 200 : 404
            
            editora.destroy()
            return res.status(status)
        } catch (error) {
            console.log(error)
        }
    }
}
export default new EditoraController()