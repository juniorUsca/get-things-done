/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoImboxRepository')} obj.ImboxRepository
 */
module.exports = ({ ImboxRepository }) => {
  return async () => {
    return await ImboxRepository.getAll()
  }
}
