/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTicklerRepository')} obj.TicklerRepository
 */
module.exports = ({ TicklerRepository }) => {
  return async ({ id }) => {
    return await TicklerRepository.delete({ id })
  }
}
