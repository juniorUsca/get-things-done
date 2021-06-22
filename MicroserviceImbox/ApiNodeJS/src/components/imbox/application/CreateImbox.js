/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoImboxRepository')} obj.ImboxRepository
 */
module.exports = ({ ImboxRepository }) => {
  const fecha = new Date()
  return async ({ tarea }) => {
    const newImbox = {
      tarea: tarea,
      created_at: fecha,
      updated_at: fecha,
    }

    return await ImboxRepository.add(newImbox)
  }
}
