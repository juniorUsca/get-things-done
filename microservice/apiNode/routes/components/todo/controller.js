const COLLECTION = "usuarios" // Colleccion o tabla en Mongodb

const Controller = (injectedStore) => {
	const store = injectedStore
	async function list(body) {
		const users = await store.list(COLLECTION, body)
		return users;
	}

	async function get(id, body) {
		const user = await store.get(COLLECTION, id, body)
		return user
	}

	return {
		list,
		get
	}
}

export default Controller