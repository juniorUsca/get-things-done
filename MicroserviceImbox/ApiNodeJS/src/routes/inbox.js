
const router = require('express').Router()
const express = require('express')

const { createNewImbox } = require('../components/imbox/controller')
const { showAllImbox } = require('../components/imbox/controller')
const { deleteAllImbox } = require('../components/imbox/controller')
const { GetImboxById } = require('../components/imbox/controller')
const { updateUniqueImbox } = require('../components/imbox/controller')
const { DeleteUniqueImbox } = require('../components/imbox/controller')

const bodyParser = require('body-parser')

const fecha = new Date()

//Esta es una ruta de prueba para probar la el listado
// router.get('/', (request, response, next) => {
//   response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>' +
//   '<br/><a href="/apiImbox/form"><button>CrearTarea</button></a>'+
//   '<br/><a href="/apiImbox/api/imbox"><button>ver registros JSON</button></a>')
// })

//Con la siguiente ruta obtendremos todos lo valores para mostrarlos en la UI
router.get('/api/imbox', showAllImbox)

//La siguiente ruta nos permitira obtener un imbox por su id unico
router.get('/api/imbox/:id', GetImboxById)

//La siguiente ruta nos permitira Eliminar un imbox unico
router.delete('/api/imbox/:id', DeleteUniqueImbox)

//Esta ruta nos permitira actualizar un imbox, por medio de su id y enviando los datos con json
router.put('/api/imbox/:id', updateUniqueImbox)

//Esta URL nos permitira eliminar toda la tabla cuando el dia se termine
//Ya que lo imbox deben eliminarse cuando se termine el dia
//Se determina el tipo de peticion POST ya que la peticion de tipo DELETE
//nos pide como requisito el envio de un id por medio de la URL
router.post('/api/imbox/deleteAllTable', deleteAllImbox)

//Esta es una ruta de prueba para poder crear un imbox desde el navegador
// router.get('/form', (request, response) => {
//   response.send('<h1>Inserta la descripcion de la tarea</h1>' +
//    '<form method="POST" action="/apiImbox/api/imbox">' +
//    '  <label>Descripcion</label><br/>' +
//    '    <input type="text" name="tarea"> <br/><br/>' +
//    '  <button type="submit">Enviar</button>' +
//    '</form>')
// })

router.use(express.json())

// extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/api/imbox', createNewImbox)

module.exports = router
