/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoIncubadoraRepository')} obj.IncubadoraRepository
 */
module.exports = ({ IncubadoraRepository }) => {
  const fecha = new Date()
  return async ({ tarea, user_id, fecha_tarea,hora_tarea}) => {
    const newIncubadora = {
      descripcion_tarea: tarea,
      user_id: user_id,
      fecha_tarea: fecha_tarea,
      hora_tarea: hora_tarea,
      created_at: fecha,
      updated_at: fecha,
    }

    return await IncubadoraRepository.add(newIncubadora)
  }
}
