
const router = require('express').Router()
const express = require('express')

const { createNewCalendary } = require('../components/calendary/controller')
const { showAllCalendary } = require('../components/calendary/controller')
const { GetCalendaryById } = require('../components/calendary/controller')
const { updateUniqueCalendary } = require('../components/calendary/controller')
const { DeleteUniqueCalendary } = require('../components/calendary/controller')

const bodyParser = require('body-parser')

const fecha = new Date()

// Esta es una ruta de prueba para probar la el listado
router.get('/', (request, response, next) => {
  response.send('<h1>Bienvenidos a mi pagina con NODEJS</h1>' +
  '<br/><a href="/form"><button>CrearTarea</button></a>'+
  '<br/><a href="/api/calendary"><button>ver registros JSON</button></a>')
})

//Con la siguiente ruta obtendremos todos lo valores para mostrarlos en la UI
router.get('/api/calendary', showAllCalendary)

//La siguiente ruta nos permitira obtener un imbox por su id unico
router.get('/api/calendary/:id', GetCalendaryById)

//La siguiente ruta nos permitira Eliminar un imbox unico
router.delete('/api/calendary/:id', DeleteUniqueCalendary)

//Esta ruta nos permitira actualizar un imbox, por medio de su id y enviando los datos con json
router.put('/api/calendary/:id', updateUniqueCalendary)


//Esta es una ruta de prueba para poder crear un imbox desde el navegador
router.get('/form', (request, response) => {
  response.send('<h1>Inserta la descripcion de la tarea</h1>' +
   '<form method="POST" action="/api/calendary">' +
   '  <label>Descripcion</label><br/>' +
   '    <input type="text" name="tarea"> <br/><br/>' +
   '  <label>User_ID</label><br/>' +
   '    <input type="text" name="user_id"> <br/><br/>' +
   '  <label>Fecha</label><br/>' +
   '    <input type="date" name="fecha_tarea"> <br/><br/>' +
   '  <label>Inicio</label><br/>' +
   '    <input type="text" name="hora_inicio_tarea"> <br/><br/>' +
   '  <label>Fin</label><br/>' +
   '    <input type="text" name="hora_fin_tarea"> <br/><br/>' +
   '  <button type="submit">Enviar</button>' +
   '</form>')
})

router.use(express.json())

// extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/api/calendary', createNewCalendary)

module.exports = router
