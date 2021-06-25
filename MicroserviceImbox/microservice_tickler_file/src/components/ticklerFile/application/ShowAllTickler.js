/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTicklerRepository')} obj.TicklerRepository
 */
module.exports = ({ TicklerRepository }) => {
  return async () => {
    return await TicklerRepository.getAll()
  }
}
