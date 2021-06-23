import express from 'express'

import { config } from '../config'
import { router } from './network'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use('/', router)

if(process.env.NODE_ENV != "test"){
    app.listen(config.mongodbService.port, () => {
		console.log('Servicio de MongoDB escuchando en el puerto ', config.mongodbService.port);
	})
}

export {app}