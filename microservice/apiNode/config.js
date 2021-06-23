import dotenv from 'dotenv'
dotenv.config()

export const config = {
	dev: process.env.NODE_ENV !== 'production',
	mongo: {
		uri: process.env.MONGO_URI || 'mongodb+srv://admin:admin@cluster0.qcmsu.mongodb.net/',
		db: process.env.MONGO_DB || 'myFirstDatabase'
	},
	mongodbService: {
		host: process.env.MONGO_SRV_HOST || 'localhost',
		port: process.env.MONGO_SRV_PORT || 3002,
	},
}