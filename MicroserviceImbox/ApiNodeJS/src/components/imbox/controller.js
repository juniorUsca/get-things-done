const MongoImboxRepository = require('./infraestructure/MongoImboxRepository')
const CreateImbox = require('./application/CreateImbox')
const ShowAllImbox = require('./application/ShowAllImbox')
const DeleteImbox = require('./application/DeleteImbox')
const GetImbox = require('./application/GetImbox')
const DeleteAllInbox = require('./application/DeleteAllImbox')
const UpdateImbox = require('./application/UpdateImbox')

const ImboxRepository = new MongoImboxRepository()
/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const createNewImbox = async (req, res, next) => {
  try {
    const query = CreateImbox({ ImboxRepository })
    const Imbox = await query(req.body)
    res.status(201).json({
      data: Imbox,
      message: 'Imbox created'
    })
  } catch (e) {
    next(e)
  }
}

const showAllImbox = async (_, res, next) => {
  try {
    const query = ShowAllImbox({ ImboxRepository })
    const allimbox = await query()
    res.json(allimbox)
  } catch (e) {
    next(e)
  }
}

const DeleteUniqueImbox = async (req, res, next) => {
  try {
    const query = DeleteImbox({ ImboxRepository })
    const id = await query(req.params)
    console.log(id)
    res.status(204).end()
  } catch (e) {
    next(e)
  }
}

const GetImboxById = async (req, res, next) => {
  try {
    const query = GetImbox({ ImboxRepository })
    const UniqueImbox = await query(req.params)
    if (UniqueImbox) {
      res.json(UniqueImbox)
    } else {
      res.send('<h3>no existe imbox con el id enviado</h3>')
    }
  } catch (e) {
    next(e)
  }
}

const deleteAllImbox = async (req, res, next) => {
    try {
      const query = DeleteAllInbox({ ImboxRepository })
      console.log('deleteAllImbox')
      await query()
      res.status(204).end()
    } catch (e) {
      next(e)
    }
}

const updateUniqueImbox = async (req, res, next) => {
    try {
      const queryget = GetImbox({ ImboxRepository })
      const imboxget = await queryget(req.params)
      const query = UpdateImbox({ ImboxRepository })
      const imbox = await query(req.params, imboxget, req.body)
      res.status(201).json({
        data: imbox,
        message: 'imbox updated'
      })
      
    } catch (e) {
      next(e)
    }
  }

module.exports = {
  createNewImbox,
  showAllImbox,
  DeleteUniqueImbox,
  GetImboxById,
  deleteAllImbox,
  updateUniqueImbox
}
