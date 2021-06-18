import express from 'express'
import Controller from './index'

const router = express.Router()
// Listar gtd
router.get('/', (req, res) => {
	Controller.list(req.body)
		.then((list) => {
			res.status(200).json({
				data: list,
				message: 'success'
			})
		})
		.catch((err) => {
			res.status(404).json({
				data: null,
				message: err
			})
		})
})


router.get('/:id', (req, res) => {
	const id = req.params.id
	Controller.get(id, req.body)
		.then((user) => {
			res.status(200).json({
				data: user,
				message: 'success'
			})
		})
		.catch((err) => {
			res.status(404).json({
				data: null,
				message: err
			})
		})
})

export default router