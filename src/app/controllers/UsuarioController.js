import Usuario from "../models/Usuario"

class UsuarioController {
    async index(req,res){
        try {
            const usuario = await Usuario.findAll()
            const status = usuario ? 200 : 404

            return res.status(status).json(usuario)
        } catch (error) {
            console.log(error)
        }
    }

    async find(req,res){
        try {
            const id = parseInt(req.params.id)
            const usuario = await Usuario.findByPk(id)
            const status = usuario ? 200 : 404

            return res.status(status).json(usuario)
        } catch (error) {
            console.log(error)
        }
    }

    async create(req,res){
        try {
            const {nome, email, senha} = req.body
            const novoUsuario = await Usuario.create({
                nome, email, senha
            })

            const status = novoUsuario ? 200 : 404
            
            return res.status(status).json(novoUsuario)
        } catch (error) {
            console.log(error)
        }
    }

    async update(req,res){
        try {
            const id = parseInt(req.params.id)
            const {nome,email,senha} = req.body
            const usuario = await Usuario.findByPk(id)

            const status = usuario ? 200 : 404
            const novoUsuario = await usuario.update({
                nome,
                email,
                senha
            })

            return res.status(status).json(novoUsuario)

        } catch (error) {
            console.log(error)
        }
    }

    async delete(req,res){
        try {
            const id = parseInt(req.params.id)
            const usuario = await Usuario.findByPk(id)
            const status = usuario ? 200 : 404
            
            usuario.destroy()
            return res.status(status)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UsuarioController()