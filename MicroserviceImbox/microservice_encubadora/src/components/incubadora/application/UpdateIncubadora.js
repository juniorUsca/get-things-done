/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoIncubadoraRepository')} obj.IncubadoraRepository
 */
 module.exports = ({ IncubadoraRepository }) => {
    const fecha = new Date()
    return async ({id},{user_id, created_at},{tarea, fecha_tarea, hora_tarea}) => {
      const ticklerUpdate = {
        descripcion_tarea: tarea,
        user_id: user_id,
        fecha_tarea: fecha_tarea,
        hora_tarea: hora_tarea,
        created_at: created_at,
        updated_at: fecha,
      }  
      return await IncubadoraRepository.update(id, ticklerUpdate)
    }
  }
  