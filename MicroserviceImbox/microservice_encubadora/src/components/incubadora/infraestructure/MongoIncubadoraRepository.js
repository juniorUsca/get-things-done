const MongoLib = require('../../../lib/mongo')

class MongoIncubadoraRepository {
  constructor () {
    this.collection = 'IncubadoraTareas'
    this.mongoDB = new MongoLib()
  }

  async add (incubadora) {
    await this.mongoDB.create(this.collection, incubadora)
    return { ...incubadora }
  }

  async update ( id, incubadora ) {
    await this.mongoDB.update(this.collection, id, incubadora)
    return { ...incubadora }
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

module.exports = MongoIncubadoraRepository
