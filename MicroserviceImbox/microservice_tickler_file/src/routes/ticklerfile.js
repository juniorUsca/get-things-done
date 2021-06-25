
const router = require('express').Router()
const express = require('express')

const { createNewTickler } = require('../components/ticklerFile/controller')
const { showAllTickler } = require('../components/ticklerFile/controller')
const { GetTicklerById } = require('../components/ticklerFile/controller')
const { updateUniqueTickler } = require('../components/ticklerFile/controller')
const { DeleteUniqueTickler } = require('../components/ticklerFile/controller')

const bodyParser = require('body-parser')

const fecha = new Date()

// Esta es una ruta de prueba para probar la el listado
// router.get('/', (request, response, next) => {
//   response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>' +
//   '<br/><a href="/form"><button>CrearTarea</button></a>'+
//   '<br/><a href="/api/tickler"><button>ver registros JSON</button></a>')
// })

//Con la siguiente ruta obtendremos todos lo valores para mostrarlos en la UI
router.get('/api/tickler', showAllTickler)

//La siguiente ruta nos permitira obtener un ticlerFile por su id unico
router.get('/api/tickler/:id', GetTicklerById)

//La siguiente ruta nos permitira Eliminar un ticlerFile unico
router.delete('/api/tickler/:id', DeleteUniqueTickler)

//Esta ruta nos permitira actualizar un ticlerFile, por medio de su id y enviando los datos con json
router.put('/api/tickler/:id', updateUniqueTickler)


//Esta es una ruta de prueba para poder crear un ticlerFile desde el navegador
// router.get('/form', (request, response) => {
//   response.send('<h1>Inserta la descripcion de la tarea</h1>' +
//    '<form method="POST" action="/api/tickler">' +
//    '  <label>Descripcion</label><br/>' +
//    '    <input type="text" name="tarea"> <br/><br/>' +
//    '  <label>User_ID</label><br/>' +
//    '    <input type="text" name="user_id"> <br/><br/>' +
//    '  <label>Fecha Recordatorio</label><br/>' +
//    '    <input type="date" name="fecha_recordatorio"> <br/><br/>' +
//    '  <button type="submit">Enviar</button>' +
//    '</form>')
// })

router.use(express.json())

// extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/api/tickler', createNewTickler)

module.exports = router
