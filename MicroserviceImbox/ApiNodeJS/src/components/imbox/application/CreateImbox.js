/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoImboxRepository')} obj.ImboxRepository
 */
module.exports = ({ ImboxRepository }) => {
  const fecha = new Date()
  return async ({ tarea, user_id }) => {
    const newImbox = {
      tarea: tarea,
      user_id: user_id,
      created_at: fecha,
      updated_at: fecha,
    }

    return await ImboxRepository.add(newImbox)
  }
}
