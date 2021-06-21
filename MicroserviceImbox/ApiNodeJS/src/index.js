const express = require('express')
const app = express()
const apiIndex = require('./routes/inbox.js')

const errorHandler = require('./utils/middlewares/errorHandlers')
const notFoundHandler = require('./utils/middlewares/notFoundHandler')

app.use(express.json());

app.use('/', apiIndex)

// Middleware Final para rutas inexistentes
app.use(notFoundHandler)

// Middlewares
app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT)
console.log(`Server running on port ${PORT}`)
