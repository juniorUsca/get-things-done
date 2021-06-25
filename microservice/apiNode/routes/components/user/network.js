import express from 'express'
import { response } from '../../../response/response'
import Controller from './index'
import { checkAuth as secure } from './secure'

const router = express.Router()

router.post('/login', login);
router.get('/', listAll);
router.get('/:idUser/', getOne);
router.post('/', createOne);
router.put('/:idUser', secure('update'), updateOne);
router.delete('/:idUser', secure('delete'), deleteOne);

function login(req, res) {
	Controller.login(req.body.email, req.body.password)
		.then((token) => {
			response.success(req, res, token, 201)
		})
		.catch((err) => {
			response.error(req, res, 'Información invalida', 400)
		});
}

// List user 
function listAll(req, res, next) {
	Controller.listAllUsers()
		.then((list) => {
			response.success(req, res, list, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

function getOne(req, res, next) {
	const idUser = req.params.idUser
	Controller.getUserById(idUser, idUser)
		.then((user) => {
			response.success(req, res, user, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// Create User
function createOne(req, res, next) {
	Controller.createUser(req.body)
		.then((user) => {
			response.success(req, res, user.body, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// Update User
// Se requiere estar logeado y que el usuario que se desea modificar sea el mismo de la sesion
function updateOne(req, res) {
	const idUser = req.user._id
	Controller.updateUser(idUser, req.body)
		.then((user) => {
			response.success(req, res, user.body, 201)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

// Delete User
// Se requiere estar logeado y que el usuario que se desea eliminar sea el mismo de la sesion
function deleteOne(req, res) {
	const idUser = req.user._id
	Controller.deleteUser(idUser, req.body)
		.then((user) => {
			response.success(req, res, user.body, 200)
		})
		.catch((err) => {
			response.error(req, res, err, 404)
		})
}

export default router