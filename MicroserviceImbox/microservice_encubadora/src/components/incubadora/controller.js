const MongoIncubadoraRepository = require('./infraestructure/MongoIncubadoraRepository')
const CreateIncubadora = require('./application/CreateIncubadora')
const ShowAllIncubadora = require('./application/ShowAllIncubadora')
const DeleteIncubadora = require('./application/DeleteIncubadora')
const GetIncubadora = require('./application/GetIncubadora')
const UpdateIncubadora = require('./application/UpdateIncubadora')

const IncubadoraRepository = new MongoIncubadoraRepository()
/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createNewIncubadora = async (req, res, next) => {
  try {
    const query = CreateIncubadora({ IncubadoraRepository })
    const Incubadora = await query(req.body)
    res.status(201).json({
      data: Incubadora,
      message: 'Incubadora File created'
    })
  } catch (e) {
    next(e)
  }
}

const showAllIncubadora = async (_, res, next) => {
  try {
    const query = ShowAllIncubadora({ IncubadoraRepository })
    const allIncubadora = await query()
    res.json(allIncubadora)
  } catch (e) {
    next(e)
  }
}

const DeleteUniqueIncubadora = async (req, res, next) => {
  try {
    const query = DeleteIncubadora({ IncubadoraRepository })
    const id = await query(req.params)
    console.log(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

const GetIncubadoraById = async (req, res, next) => {
  try {
    const query = GetIncubadora({ IncubadoraRepository })
    const UniqueIncubadora = await query(req.params)
    if (UniqueIncubadora) {
      res.json(UniqueIncubadora)
    } else {
      res.send('<h3>no existe un Incubadora file con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const updateUniqueIncubadora = async (req, res, next) => {
    try {
      const queryget = GetIncubadora({ IncubadoraRepository })
      const Incubadoraget = await queryget(req.params)
      const query = UpdateIncubadora({ IncubadoraRepository })
      const Incubadora = await query(req.params, Incubadoraget, req.body)
      res.status(201).json({
        data: Incubadora,
        message: 'Incubadora File updated'
      })
      
    } catch (e) {
      next(e)
    }
  }

module.exports = {
  createNewIncubadora,
  showAllIncubadora,
  DeleteUniqueIncubadora,
  GetIncubadoraById,
  updateUniqueIncubadora
}
