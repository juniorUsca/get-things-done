/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCalendaryRepository')} obj.CalendaryRepository
 */
module.exports = ({ CalendaryRepository }) => {
  const fecha = new Date()
  return async ({ tarea, user_id, fecha_tarea, hora_inicio_tarea, hora_fin_tarea }) => {
    const newCalendary = {
      descripcion_tarea: tarea,
      user_id: user_id,
      fecha_tarea: fecha_tarea,
      hora_inicio_tarea: hora_inicio_tarea,
      hora_fin_tarea: hora_fin_tarea,
      created_at: fecha,
      updated_at: fecha,
    }

    return await CalendaryRepository.add(newCalendary)
  }
}
