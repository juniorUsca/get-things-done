import pkgMongo from 'mongodb'
const { ObjectId } = pkgMongo
const COLLECTION = "inbox" // Colleccion o tabla en Mongodb

const Controller = (injectedStore) => {
	const store = injectedStore

	// Get Data
	async function listAllInbox() {
		const res = await store.list(COLLECTION)
		const inbox = res.body
		return inbox;
	}

	async function listAllInboxByUser(idUser) {
		const body = {
			"query": {
				"user_id": idUser,
			}
		}
		const res = await store.list(COLLECTION, body)
		const inbox = res.body
		return inbox;
	}

	async function getInboxById(idUser, idInbox) {
		const body = {
			"query": {
				"user_id": idUser
			},

		}
		const res = await store.get(COLLECTION, idInbox, body)
		const inbox = res.body
		return inbox
	}

	// Create Data
	async function createInbox(idUser, body) {
		const date = new Date()
		const newInbox = {
			"user_id": idUser,
			"todo": body.todo,
			"created_at": date,
		}
		const inbox = await store.insert(COLLECTION, newInbox)
		return inbox
	}

	// Update Data
	async function updateInbox(idInbox, body) {
		const inbox = await store.update(COLLECTION, idInbox, body)
		return inbox
	}

	// Delete Data
	async function deleteInbox(idInbox, body) {
		const inbox = await store.remove(COLLECTION, idInbox)
		return inbox
	}

	return {
		listAllInbox,
		listAllInboxByUser,
		getInboxById,
		createInbox,
		updateInbox,
		deleteInbox
	}
}

export default Controller