
const router = require('express').Router()
const express = require('express')

const { createNewIncubadora } = require('../components/incubadora/controller')
const { showAllIncubadora } = require('../components/incubadora/controller')
const { GetIncubadoraById } = require('../components/incubadora/controller')
const { updateUniqueIncubadora } = require('../components/incubadora/controller')
const { DeleteUniqueIncubadora } = require('../components/incubadora/controller')

const bodyParser = require('body-parser')

const fecha = new Date()

// Esta es una ruta de prueba para probar la el listado
// router.get('/', (request, response, next) => {
//   response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>' +
//   '<br/><a href="/form"><button>CrearTarea</button></a>'+
//   '<br/><a href="/api/incubadora"><button>ver registros JSON</button></a>')
// })

//Con la siguiente ruta obtendremos todos lo valores para mostrarlos en la UI
router.get('/api/incubadora', showAllIncubadora)

//La siguiente ruta nos permitira obtener un incubadora por su id unico
router.get('/api/incubadora/:id', GetIncubadoraById)

//La siguiente ruta nos permitira Eliminar un incubadora unico
router.delete('/api/incubadora/:id', DeleteUniqueIncubadora)

//Esta ruta nos permitira actualizar un incubadora, por medio de su id y enviando los datos con json
router.put('/api/incubadora/:id', updateUniqueIncubadora)


//Esta es una ruta de prueba para poder crear un incubadora desde el navegador
// router.get('/form', (request, response) => {
//   response.send('<h1>Inserta la descripcion de la tarea</h1>' +
//    '<form method="POST" action="/api/incubadora">' +
//    '  <label>Descripcion</label><br/>' +
//    '    <input type="text" name="tarea"> <br/><br/>' +
//    '  <label>User_ID</label><br/>' +
//    '    <input type="text" name="user_id"> <br/><br/>' +
//    '  <label>Fecha Tarea</label><br/>' +
//    '    <input type="date" name="fecha_recordatorio"> <br/><br/>' +
//    '  <label>Hora Tarea</label><br/>' +
//    '    <input type="text" name="hora_tarea"> <br/><br/>' +
//    '  <button type="submit">Enviar</button>' +
//    '</form>')
// })

router.use(express.json())

// extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/api/incubadora', createNewIncubadora)

module.exports = router
