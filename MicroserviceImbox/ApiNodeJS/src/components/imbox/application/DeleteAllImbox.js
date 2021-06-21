/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoImboxRepository')} obj.ImboxRepository
 */
 module.exports = ({ ImboxRepository }) => {
    return async () => {
      console.log('Repository')
      return await ImboxRepository.deleteAll()
    }
  }
  