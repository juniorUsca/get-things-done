/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCalendaryRepository')} obj.CalendaryRepository
 */
module.exports = ({ CalendaryRepository }) => {
  return async ({ id }) => {
    return await CalendaryRepository.delete({ id })
  }
}
