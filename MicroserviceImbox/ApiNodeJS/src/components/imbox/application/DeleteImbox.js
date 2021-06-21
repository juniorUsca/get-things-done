/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoImboxRepository')} obj.ImboxRepository
 */
module.exports = ({ ImboxRepository }) => {
  return async ({ id }) => {
    return await ImboxRepository.delete({ id })
  }
}
