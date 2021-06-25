const MongoLib = require('../../../lib/mongo')

class MongoTicklerRepository {
  constructor () {
    this.collection = 'TicklerFile'
    this.mongoDB = new MongoLib()
  }

  async add (tickler) {
    await this.mongoDB.create(this.collection, tickler)
    return { ...tickler }
  }

  async update ( id, tickler ) {
    await this.mongoDB.update(this.collection, id, tickler)
    return { ...tickler }
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

module.exports = MongoTicklerRepository
