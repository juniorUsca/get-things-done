import express from 'express'

import { response } from './response/response'
import MongoLib from './store/mongodb'

const Store = new MongoLib()
export const router = express.Router();

router.get('/:collection', list)
router.get('/:collection/:id', get)
router.post('/:collection', insert)
router.put('/:collection/:id', update)
router.put('/:collection/:id/push', updatePush)
router.delete('/:collection', removeAll)
router.delete('/:collection/:id', remove)
router.delete('/:collection/:id/embedded', removeEmbedded)


async function list(req, res, next) {
	const query = req.body.query || {}
	const project = req.body.project || {}
	const data = await Store.getAll(req.params.collection, query, project)
	response.success(req, res, data, 200);
}

async function get(req, res, next) {
	const query = req.body.query || {}
	const project = req.body.project || {}
	const data = await Store.get(req.params.collection, req.params.id, query, project)
	response.success(req, res, data, 200);
}

async function insert(req, res, next) {
	const data = await Store.create(req.params.collection, req.body)
	response.success(req, res, data, 201);
}

async function update(req, res, next) {
	const data = await Store.updateCollection(req.params.collection, req.params.id, req.body)
	response.success(req, res, data, 200);
}

async function updatePush(req, res, next) {
	const data = await Store.updatePush(req.params.collection, req.params.id, req.body)
	response.success(req, res, data, 200);
}

async function removeAll(req, res, next) {
	const data = await Store.deleteAll(req.params.collection)
	response.success(req, res, data, 200);
}

async function remove(req, res, next) {
	const data = await Store.delete(req.params.collection, req.params.id)
	response.success(req, res, data, 200);
}

async function removeEmbedded(req, res, next) {
	const query = req.body.query || {}
	const removeData = req.body.data || {}
	const data = await Store.deleteEmbedded(req.params.collection, req.params.id, query, removeData)
	response.success(req, res, data, 200);
}