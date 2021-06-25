/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTicklerRepository')} obj.TicklerRepository
 */
module.exports = ({ TicklerRepository }) => {
  const fecha = new Date()
  return async ({ tarea, user_id, fecha_recordatorio}) => {
    const newTickler = {
      descripcion_tarea: tarea,
      user_id: user_id,
      fecha_recordatorio: fecha_recordatorio,
      created_at: fecha,
      updated_at: fecha,
    }

    return await TicklerRepository.add(newTickler)
  }
}
