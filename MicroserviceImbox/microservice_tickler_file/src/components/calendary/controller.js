const MongoCalendaryRepository = require('./infraestructure/MongoCalendaryRepository')
const CreateCalendary = require('./application/CreateCalendary')
const ShowAllCalendary = require('./application/ShowAllCalendary')
const DeleteCalendary = require('./application/DeleteCalendary')
const GetCalendary = require('./application/GetCalendary')
const UpdateCalendary = require('./application/UpdateCalendary')

const CalendaryRepository = new MongoCalendaryRepository()
/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createNewCalendary = async (req, res, next) => {
  try {
    const query = CreateCalendary({ CalendaryRepository })
    const Calendary = await query(req.body)
    res.status(201).json({
      data: Calendary,
      message: 'Calendary created'
    })
  } catch (e) {
    next(e)
  }
}

const showAllCalendary = async (_, res, next) => {
  try {
    const query = ShowAllCalendary({ CalendaryRepository })
    const allCalendary = await query()
    res.json(allCalendary)
  } catch (e) {
    next(e)
  }
}

const DeleteUniqueCalendary = async (req, res, next) => {
  try {
    const query = DeleteCalendary({ CalendaryRepository })
    const id = await query(req.params)
    console.log(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

const GetCalendaryById = async (req, res, next) => {
  try {
    const query = GetCalendary({ CalendaryRepository })
    const UniqueCalendary = await query(req.params)
    if (UniqueCalendary) {
      res.json(UniqueCalendary)
    } else {
      res.send('<h3>no existe tarea en el calendario con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const updateUniqueCalendary = async (req, res, next) => {
    try {
      const queryget = GetCalendary({ CalendaryRepository })
      const Calendaryget = await queryget(req.params)
      const query = UpdateCalendary({ CalendaryRepository })
      const Calendary = await query(req.params, Calendaryget, req.body)
      res.status(201).json({
        data: Calendary,
        message: 'Calendary updated'
      })
      
    } catch (e) {
      next(e)
    }
  }

module.exports = {
  createNewCalendary,
  showAllCalendary,
  DeleteUniqueCalendary,
  GetCalendaryById,
  updateUniqueCalendary
}
