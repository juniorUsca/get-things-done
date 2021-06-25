/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTicklerRepository')} obj.TicklerRepository
 */
 module.exports = ({ TicklerRepository }) => {
    const fecha = new Date()
    return async ({id},{user_id, created_at},{tarea, fecha_recordatorio}) => {
      const ticklerUpdate = {
        descripcion_tarea: tarea,
        user_id: user_id,
        fecha_recordatorio: fecha_recordatorio,
        created_at: created_at,
        updated_at: fecha,
      }  
      return await TicklerRepository.update(id, ticklerUpdate)
    }
  }
  