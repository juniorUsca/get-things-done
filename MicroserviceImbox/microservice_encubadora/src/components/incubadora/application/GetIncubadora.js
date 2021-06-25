/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoIncubadoraRepository')} obj.IncubadoraRepository
 */
module.exports = ({ IncubadoraRepository }) => {
  return async ({ id }) => {
    return await IncubadoraRepository.getById({ id })
  }
}
