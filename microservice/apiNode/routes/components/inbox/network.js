import express from 'express'
import { response } from '../../../response/response'
import Controller from './index'

const router = express.Router()

// Alguna rutas requieren el id del usuario.
// Esto es temporal ya que se usara un sistema de autenticación
// para validar el usuario logeado.
router.get('/', listAll);
router.get('/:idUser', listAllByUser);
router.get('/:idUser/:idInbox', getOne);
router.post('/:idUser', createOne);
router.put('/:idInbox', updateOne);
router.delete('/:idInbox', deleteOne);

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

// Todos los Inbox de un usuario
function listAllByUser(req, res, next) {
	const idUser = req.params.idUser
	Controller.listAllInboxByUser(idUser)
		.then((list) => {
			response.success(req, res, list, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// El inbox de un usuario por ID
function getOne(req, res, next) {
	const idUser = req.params.idUser
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
function createOne(req, res, next) {
	const idUser = req.params.idUser
	Controller.createInbox(idUser, req.body)
		.then((inbox) => {
			response.success(req, res, inbox.body, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// Delete Inbox
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