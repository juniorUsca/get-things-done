import bcrypt from 'bcrypt'
const COLLECTION = "users" // Colleccion o tabla en Mongodb

const Controller = (injectedStore) => {
	const store = injectedStore

	// Get Data
	async function login(email, password) {
		const body = {
			"query": {
				"email": email
			}
		}
		const res = await store.list(COLLECTION, body)
		const user = res.body[0]
		// Comparación de contraseñas
		return bcrypt.compare(password, user.password)
			.then((isEqual) => {
				if (isEqual === true) {
					// generar token
					return { "res": "Login valido" }
				} else {
					throw new error('Informacion invalida')
				}
			});
	}

	// Get Data
	async function listAllUsers() {
		const res = await store.list(COLLECTION)
		const user = res.body
		return user;
	}

	async function getUserById(idUser) {
		const res = await store.get(COLLECTION, idUser)
		const user = res.body
		return user
	}

	// Create Data
	async function createUser(body) {
		const newUser = {
			"name": body.name,
			"email": body.email,
			"password": await bcrypt.hash(body.password, 5),
		}
		const user = await store.insert(COLLECTION, newUser)
		return user
	}

	// Update Data
	// En caso se reciba una contraseña, esta se encriptara
	async function updateUser(idUser, body) {
		if (body.password) {
			body.password = await bcrypt.hash(body.password, 5);
		}
		const user = await store.update(COLLECTION, idUser, body)
		return user
	}

	// Delete Data
	async function deleteUser(idUser, body) {
		const user = await store.remove(COLLECTION, idUser)
		return user
	}

	return {
		login,
		listAllUsers,
		getUserById,
		createUser,
		updateUser,
		deleteUser
	}
}

export default Controller