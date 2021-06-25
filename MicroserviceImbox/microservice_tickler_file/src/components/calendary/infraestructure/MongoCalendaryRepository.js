const MongoLib = require('../../../lib/mongo')

class MongoCalendaryRepository {
  constructor () {
    this.collection = 'Calendary'
    this.mongoDB = new MongoLib()
  }

  async add (calendary) {
    await this.mongoDB.create(this.collection, calendary)
    return { ...calendary }
  }

  async update ( id, calendary ) {
    await this.mongoDB.update(this.collection, id, calendary)
    return { ...calendary }
  }

  async delete ({ id }) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getById ({ id }) {
    return await this.mongoDB.get(this.collection, id)
  }

  async getAll () {
    const query = null
    return this.mongoDB.getAll(this.collection, query)
  }

}

module.exports = MongoCalendaryRepository
