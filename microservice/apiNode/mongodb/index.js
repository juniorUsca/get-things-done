import express from 'express'

import { config } from '../config'
import { router } from './network'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use('/', router)

app.listen(config.mongodbService.port, () => {
	console.log('Servicio de MongoDB escuchando en el puerto ', config.mongodbService.port);
})