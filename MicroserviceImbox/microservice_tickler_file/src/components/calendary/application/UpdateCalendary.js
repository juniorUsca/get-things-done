/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoCalendaryRepository')} obj.CalendaryRepository
 */
 module.exports = ({ CalendaryRepository }) => {
    const fecha = new Date()
    return async ({id},{user_id, created_at},{tarea, fecha_tarea, hora_inicio_tarea, hora_fin_tarea}) => {
      const imboxUpdate = {
        descripcion_tarea: tarea,
        user_id: user_id,
        fecha_tarea: fecha_tarea,
        hora_inicio_tarea: hora_inicio_tarea,
        hora_fin_tarea: hora_fin_tarea,
        created_at: created_at,
        updated_at: fecha,
      }  
      return await CalendaryRepository.update(id, imboxUpdate)
    }
  }
  