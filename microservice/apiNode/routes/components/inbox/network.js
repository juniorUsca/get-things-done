import express from 'express'
import { response } from '../../../response/response'
import Controller from './index'

const router = express.Router()

router.get('/', listAll);
router.get('/:idUser', listAllByUser);
router.get('/:idUser/:idInbox', getOne);
router.post('/:idUser', createOne);
router.put('/:idInbox', updateOne);
router.delete('/:idInbox', deleteOne);

// Listar gtd
function listAll(req, res, next) {
	Controller.listAllInbox()
		.then((list) => {
			response.success(req, res, list, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

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
			response.success(req, res, inbox.body, 200)
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