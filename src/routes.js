import { Router } from 'express'

const routes = new Router()

import usuario from './app/controllers/UsuarioController'
import autor from './app/controllers/AutorController'
import editora from './app/controllers/EditoraController'
import livro from './app/controllers/LivroController'

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

routes.get('/autor-livros/:id', autor.livros)


routes.get('/editora', editora.index)
routes.get('/editora/:id', editora.find)
routes.post('/editora', editora.create)
routes.put('/editora/:id', editora.update)
routes.delete('/editora/:id', editora.delete)

routes.get('/editora-livros/:id', editora.livros)


routes.get('/livro', livro.index)
routes.get('/livro/:id', livro.find)
routes.post('/livro', livro.create)
routes.put('/livro/:id', livro.update)
routes.delete('/livro/:id', livro.delete)

routes.get('/livro-genero/:genero', livro.genero)

routes.get('/', (req,res) => {
    res.json({message: 'Olá!!!'})
})

export default routes