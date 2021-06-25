const MongoTicklerRepository = require('./infraestructure/MongoTicklerRepository')
const CreateTickler = require('./application/CreateTickler')
const ShowAllTickler = require('./application/ShowAllTickler')
const DeleteTickler = require('./application/DeleteTickler')
const GetTickler = require('./application/GetTickler')
const UpdateTickler = require('./application/UpdateTickler')

const TicklerRepository = new MongoTicklerRepository()
/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createNewTickler = async (req, res, next) => {
  try {
    const query = CreateTickler({ TicklerRepository })
    const Tickler = await query(req.body)
    res.status(201).json({
      data: Tickler,
      message: 'Tickler File created'
    })
  } catch (e) {
    next(e)
  }
}

const showAllTickler = async (_, res, next) => {
  try {
    const query = ShowAllTickler({ TicklerRepository })
    const allTickler = await query()
    res.json(allTickler)
  } catch (e) {
    next(e)
  }
}

const DeleteUniqueTickler = async (req, res, next) => {
  try {
    const query = DeleteTickler({ TicklerRepository })
    const id = await query(req.params)
    console.log(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

const GetTicklerById = async (req, res, next) => {
  try {
    const query = GetTickler({ TicklerRepository })
    const UniqueTickler = await query(req.params)
    if (UniqueTickler) {
      res.json(UniqueTickler)
    } else {
      res.send('<h3>no existe un tickler file con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const updateUniqueTickler = async (req, res, next) => {
    try {
      const queryget = GetTickler({ TicklerRepository })
      const Ticklerget = await queryget(req.params)
      const query = UpdateTickler({ TicklerRepository })
      const Tickler = await query(req.params, Ticklerget, req.body)
      res.status(201).json({
        data: Tickler,
        message: 'Tickler File updated'
      })
      
    } catch (e) {
      next(e)
    }
  }

module.exports = {
  createNewTickler,
  showAllTickler,
  DeleteUniqueTickler,
  GetTicklerById,
  updateUniqueTickler
}
