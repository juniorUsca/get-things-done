/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoIncubadoraRepository')} obj.IncubadoraRepository
 */
module.exports = ({ IncubadoraRepository }) => {
  return async () => {
    return await IncubadoraRepository.getAll()
  }
}
