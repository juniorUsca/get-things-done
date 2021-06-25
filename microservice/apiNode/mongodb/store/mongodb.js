import pkgMongo from 'mongodb'
import { config } from '../../config'
import 'regenerator-runtime/runtime'
const { MongoClient, ObjectId } = pkgMongo

const MONGO_URI = config.mongo.uri
const MONGO_DB = config.mongo.db

class MongoLib {
	constructor() {
		this.client = new MongoClient(MONGO_URI, {
			useUnifiedTopology: true
		})
		this.dbName = MONGO_DB
	}

	/**
	 * @return {Promise<import('mongodb').Db>} database
	 */
	async connect() {
		if (!MongoLib.connection) {
			MongoLib.connection = new Promise((resolve, reject) => {
				this.client.connect(err => {
					if (err) {
						return reject(err)
					}
					console.log('Connected succesfully to mongo')
					resolve(this.client.db(this.dbName))
				})
			})
		}

		return MongoLib.connection
	}

	async getAll(collection, query, projection) {
		const db = await this.connect()
		return db.collection(collection).find(query).project(projection).toArray()
	}

	async get(collection, id, query, projection) {
		const db = await this.connect()
		query._id = ObjectId(id)
		return db.collection(collection).findOne(query, { "projection": projection })
	}

	async create(collection, data) {
		const db = await this.connect()
		const result = await db.collection(collection).insertOne({ ...data })
		return result.ops[0]
	}

	async updateCollection(collection, id, data) {
		const db = await this.connect()
		const result = await db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true })
		return result.upsertedId || id
	}

	async updatePush(collection, id, data) {
		const db = await this.connect()
		const result = await db.collection(collection).updateOne({ _id: ObjectId(id) }, { $push: data }, { upsert: true })
		return result.upsertedId || id
	}

	async delete(collection, id) {
		const db = await this.connect()
		await db.collection(collection).deleteOne({ _id: ObjectId(id) })
		return id
	}

	async deleteEmbedded(collection, query, data) {
		const db = await this.connect()
		const result = await db.collection(collection).updateOne(query, { $pull: data }, { upsert: true })
		return result.upsertedId || id
	}

	async deleteAll(collection) {
		const db = await this.connect()
		await db.collection(collection).deleteMany({})
		return []
	}
}

export default MongoLib