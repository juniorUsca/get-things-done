import axios from 'axios';

function createRemoteDB(host, port) {
	const URL = 'http://' + host + ':' + port

	function list(table, data = "") {
		return req('GET', table, data, "")
	}

	function get(table, id, data = "") {
		return req('GET', table, data, id)
	}

	function insert(table, data) {
		return req('POST', table, data, "");
	}

	function update(table, id, data) {
		return req('PUT', table, data, id);
	}

	function updatePush(table, id, data) {
		table += `/${id}/push`
		return req('PUT', table, data, "");
	}

	function remove(table, id) {
		return req('DELETE', table, "", id)
	}

	function req(method, table, data, id) {
		let url = URL + '/' + table + '/' + id;

		console.log(url)
		return new Promise((resolve, reject) => {
			axios({
				method,
				headers: {
					'content-type': 'application/json'
				},
				url,
				data
			}).then(res => {
				return resolve(res.data)

			}).catch(err => {
				console.error('Error con la base de datos remota', err)
				return reject(err.message)
			})
		})
	}
	return {
		list,
		get,
		insert,
		update,
		updatePush,
		remove,
	}
}

export { createRemoteDB }