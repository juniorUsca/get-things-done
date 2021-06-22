import express from 'express'
import { db } from '../config'

const router = express.Router()

// Listar inbox
router.get('/:user_id', (request, response) => {
    try {
        const user_id = request.params.user_id
        db.ref("users").child(user_id).get().then((snapshot) => {
            if (!snapshot.exists()) {
                return response.status(404).json({
                    data: 'Error user not found',
                    message: 'error'
                })
            }
        }).catch((error) => {
            return response.status(404).json({
                data: error.message,
                message: 'error'
            })
        })
        let data = []
        db.ref("users").child(user_id).child('inbox').get().then((snapshot) => {
            if (snapshot.exists()) {
                for (const [key, value] of Object.entries(snapshot.val())) {
                    //console.log(key, value);
                    data.push({
                        id: key,
                        description: value.description,
                        status_done: value.status_done,
                        created_at: value.created_at,
                        ...(value.updated_at && { updated_at: value.updated_at }),
                    })

                }
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {
                return response.status(200).json({
                    data: [],
                    message: 'success'
                })
            }
        }).catch((error) => {
            response.status(404).json({
                data: error.message,
                message: 'error'
            })
        });

    } catch (error) {
        response.status(404).json({
            data: error.message,
            message: 'error'
        })
    }
})

// Obtener un solo inbox
router.get('/:user_id/:inbox_id', (request, response) => {
    try {
        const inbox_id = request.params.inbox_id
        const user_id = request.params.user_id
        db.ref("users").child(user_id).get().then((snapshot) => {
            if (!snapshot.exists()) {
                return response.status(404).json({
                    data: 'Error user not found',
                    message: 'error'
                })
            }
        }).catch((error) => {
            return response.status(404).json({
                data: error.message,
                message: 'error'
            })
        })
        db.ref("users").child(user_id).child('inbox').child(inbox_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                let data = {
                    index_id: snapshot.key,
                    ...snapshot.val()
                }
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {
                return response.status(404).json({
                    data: 'Error inbox not found',
                    message: 'error'
                })
            }
        }).catch((error) => {
            response.status(404).json({
                data: error.message,
                message: 'error'
            })
        });
    } catch (error) {
        response.status(404).json({
            data: error.message,
            message: 'error'
        })
    }
})

// crear inbox
router.post('/:user_id', (request, response) => {
    try {
        const user_id = request.params.user_id
        db.ref("users").child(user_id).get().then((snapshot) => {
            if (!snapshot.exists()) {
                return response.status(404).json({
                    data: 'Error user not found',
                    message: 'error'
                })
            }
        }).catch((error) => {
            return response.status(404).json({
                data: error.message,
                message: 'error'
            })
        })
        const description = request.body.description
        if (!description) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }

        const newInbox = {
            description: description,
            status_done: false,
            created_at: (new Date()).toISOString(),
        }
        const key = db.ref('users').child(user_id).child('inbox').push(newInbox).key

        response.status(201).json({
            data: {
                inbox_id: key,
                ...newInbox
            },
            message: 'success'
        })
    } catch (error) {
        response.status(404).json({
            data: error.message,
            message: 'error'
        })
    }
})


// Actualizar inbox
router.patch('/:user_id/:inbox_id', (request, response) => {
    try {
        const inbox_id = request.params.inbox_id
        const user_id = request.params.user_id
        db.ref("users").child(user_id).get().then((snapshot) => {
            if (!snapshot.exists()) {
                return response.status(404).json({
                    data: 'Error user not found',
                    message: 'error'
                })
            }
        }).catch((error) => {
            return response.status(404).json({
                data: error.message,
                message: 'error'
            })
        })
        const description = request.body.description
        const status_done = request.body.status_done
        if (!description && !status_done) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }
        db.ref("users").child(user_id).child('inbox').child(inbox_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                if (description)
                    db.ref('users').child(user_id).child('inbox').child(inbox_id).child('description').set(description)
                if (status_done)
                    db.ref('users').child(user_id).child('inbox').child(inbox_id).child('status_done').set(status_done)
                db.ref('users').child(user_id).child('inbox').child(inbox_id).child('updated_at').set((new Date()).toISOString())
                let data = {
                    index_id: snapshot.key,
                    ...snapshot.val(),
                    ...(description && { description: description }),
                    ...(status_done && { status_done: status_done }),
                    updated_date: (new Date()).toISOString(),
                }
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {
                response.status(404).json({
                    data: 'Error inbox not found',
                    message: 'error'
                })
            }
        }).catch((error) => {
            response.status(404).json({
                data: error.message,
                message: 'error'
            })
        });
    } catch (error) {
        response.status(404).json({
            data: error.message,
            message: 'error'
        })
    }
})

// Eliminar entidad
router.delete('/:user_id/:inbox_id', (request, response) => {
    try {
        const inbox_id = request.params.inbox_id
        const user_id = request.params.user_id
        db.ref("users").child(user_id).get().then((snapshot) => {
            if (!snapshot.exists()) {
                return response.status(404).json({
                    data: 'Error user not found',
                    message: 'error'
                })
            }
        }).catch((error) => {
            return response.status(404).json({
                data: error.message,
                message: 'error'
            })
        })
        db.ref("users").child(user_id).child('inbox').child(inbox_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                db.ref("users").child(user_id).child('inbox').child(inbox_id).remove()
                return response.status(200).json({
                    data: 'Inbox removed',
                    message: 'success'
                })
            } else {
                return response.status(200).json({
                    data: 'Error inbox not found',
                    message: 'error'
                })
            }
        }).catch((error) => {
            response.status(404).json({
                data: error.message,
                message: 'error'
            })
        });
    } catch (error) {
        response.status(404).json({
            data: error.message,
            message: 'error'
        })
    }
});

export default router