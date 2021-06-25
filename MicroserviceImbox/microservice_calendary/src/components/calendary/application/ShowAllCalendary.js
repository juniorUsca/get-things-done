/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCalendaryRepository')} obj.CalendaryRepository
 */
module.exports = ({ CalendaryRepository }) => {
  return async () => {
    return await CalendaryRepository.getAll()
  }
}
