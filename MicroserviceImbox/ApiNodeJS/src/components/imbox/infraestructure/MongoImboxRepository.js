const MongoLib = require('../../../lib/mongo')

class MongoImboxRepository {
  constructor () {
    this.collection = 'Imbox'
    this.mongoDB = new MongoLib()
  }

  async add (imbox) {
    await this.mongoDB.create(this.collection, imbox)
    return { ...imbox }
  }

  async update ( id, imbox ) {
    await this.mongoDB.update(this.collection, id, imbox)
    return { ...imbox }
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

  async deleteAll () {
    console.log('mongo')
    const query = null
    return this.mongoDB.deleteall(this.collection, query)
  }
}

module.exports = MongoImboxRepository
