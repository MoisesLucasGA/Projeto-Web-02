import { Router } from 'express'

const routes = new Router()

import usuario from './app/controllers/UsuarioController'
import autor from './app/controllers/AutorController'
import editora from './app/controllers/EditoraController'

routes.get('/usuario', usuario.index)
routes.get('/usuario/:id', usuario.find)
routes.post('/usuario', usuario.create)
routes.put('/usuario/:id', usuario.update)
routes.delete('/usuario/:id', usuario.delete)

routes.get('/autor', autor.index)
routes.get('/autor/:id', autor.find)
routes.post('/autor', autor.create)
routes.put('/autor/:id', autor.update)
routes.delete('/autor/:id', autor.delete)

routes.get('/editora', editora.index)
routes.get('/editora/:id', editora.find)
routes.post('/editora', editora.create)
routes.put('/editora/:id', editora.update)
routes.delete('/editora/:id', editora.delete)

routes.get('/', (req,res) => {
    res.json({message: 'Salveeeee!!!'})
})

export default routes