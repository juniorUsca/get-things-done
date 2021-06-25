import express from 'express'
import { response } from '../../../response/response'
import Controller from './index'
import { checkAuth as secure } from './secure'

const router = express.Router()

// Alguna rutas requieren el id del usuario.
// Esto es temporal ya que se usara un sistema de autenticación
// para validar el usuario logeado.
router.get('/all', listAll);
router.get('/', secure("list_own"), listAllByUser);
router.get('/:idInbox', secure("get_own"), getOne);
router.post('/', secure("create"), createOne);
router.put('/:idUser/:idInbox', secure("update"), updateOne);
router.delete('/:idUser/:idInbox', secure("delete"), deleteOne);

// Todos los inbox de la base de datos
function listAll(req, res, next) {
	Controller.listAllInbox()
		.then((list) => {
			response.success(req, res, list, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// Solo se retornara todos los inbox del usuario logeado
// Todos los Inbox de un usuario
function listAllByUser(req, res, next) {
	const idUser = req.user._id
	Controller.listAllInboxByUser(idUser)
		.then((list) => {
			response.success(req, res, list, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// El inbox de un usuario por ID
// Se necesita el id inbox y que el usuario este logeado para obtener la data
// Si se proporciona un idInbox correcto, pero el usuario no esta logeado o el usuario no tiene ese inbox
// Se devolvera vacio
function getOne(req, res, next) {
	const idUser = req.user._id
	const idInbox = req.params.idInbox
	Controller.getInboxById(idUser, idInbox)
		.then((inbox) => {
			response.success(req, res, inbox, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// Create Inbox
// Se creara el Inbox para el usuario logeado
function createOne(req, res, next) {
	const idUser = req.user._id
	Controller.createInbox(idUser, req.body)
		.then((inbox) => {
			response.success(req, res, inbox.body, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// Delete Inbox
// Se actualizara si el usuario esta logeado
function updateOne(req, res) {
	const idInbox = req.params.idInbox
	Controller.updateInbox(idInbox, req.body)
		.then((inbox) => {
			response.success(req, res, inbox.body, 201)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// Delete Inbox
// Se eliminara si el usuario esta logeado
function deleteOne(req, res) {
	const idInbox = req.params.idInbox
	Controller.deleteInbox(idInbox, req.body)
		.then((inbox) => {
			response.success(req, res, inbox.body, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

export default router