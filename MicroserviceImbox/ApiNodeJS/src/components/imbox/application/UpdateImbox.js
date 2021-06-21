/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoImboxRepository')} obj.ImboxRepository
 */
 module.exports = ({ ImboxRepository }) => {
    const fecha = new Date()
    return async ({id},{created_at },{tarea}) => {
      const imboxUpdate = {
        tarea: tarea,
        created_at: created_at,
        updated_at: fecha
      }  
      return await ImboxRepository.update(id, imboxUpdate)
    }
  }
  