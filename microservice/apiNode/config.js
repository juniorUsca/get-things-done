import dotenv from 'dotenv'
dotenv.config()

export const config = {
	dev: process.env.NODE_ENV !== 'production',
	mongo: {
		uri: process.env.MONGO_URI || 'localhost',
		db: process.env.MONGO_DB || 'mongodb_data'
	},
	mongodbService: {
		host: process.env.MONGO_SRV_HOST || 'localhost',
		port: process.env.MONGO_SRV_PORT || 3002,
	},
}