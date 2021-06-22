import express from 'express'
import { db } from '../config'

const router = express.Router()


// crear incubator
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
        const deadline = request.body.deadline

        if (!description || !deadline) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }

        const newincubator = {
            description: description,
            deadline: deadline,
            created_at: (new Date()).toISOString(),
            status_done: false
        }

        const key = db.ref('users').child(user_id).child('incubator').push(newincubator).key

        response.status(201).json({
            data: {
                incubator_id: key,
                ...newincubator
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

// Listar incubator
router.get('/:user_id', (request, response) => {
    try {
        const user_id = request.params.user_id
        let data = []
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
        db.ref("users").child(user_id).child('incubator').get().then((snapshot) => {
            if (snapshot.exists()) {
                for (const [key, value] of Object.entries(snapshot.val())) {
                    //console.log(key, value);
                    data.push({
                        id: key,
                        description: value.description,
                        deadline: value.deadline,
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

// Obtener un solo incubator
router.get('/:user_id/:incubator_id', (request, response) => {
    try {
        const incubator_id = request.params.incubator_id
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
        db.ref("users").child(user_id).child('incubator').child(incubator_id).get().then((snapshot) => {
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
                return response.status(200).json({
                    data: 'Error incubator not found',
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

// Actualizar incubator
router.patch('/:user_id/:incubator_id', (request, response) => {
    try {
        const incubator_id = request.params.incubator_id
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
        const deadline = request.body.deadline
        if (!description && !status_done && !deadline) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }

        db.ref("users").child(user_id).child('incubator').child(incubator_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                if (description)
                    db.ref('users').child(user_id).child('incubator').child(incubator_id).child('description').set(description)
                if (status_done)
                    db.ref('users').child(user_id).child('incubator').child(incubator_id).child('status_done').set(status_done)
                if (deadline)
                    db.ref('users').child(user_id).child('incubator').child(incubator_id).child('deadline').set(deadline)

                db.ref('users').child(user_id).child('incubator').child(incubator_id).child('updated_at').set((new Date()).toISOString())
                let data = {
                    index_id: snapshot.key,
                    ...snapshot.val(),
                    ...(description && { description: description }),
                    ...(status_done && { status_done: status_done }),
                    ...(deadline && { deadline: deadline }),
                    updated_at: (new Date()).toISOString(),
                }
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {
                return response.status(404).json({
                    data: 'Error incubator not found',
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
router.delete('/:user_id/:incubator_id', (request, response) => {
    try {
        const incubator_id = request.params.incubator_id
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
        db.ref("users").child(user_id).child('incubator').child(incubator_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                db.ref("users").child(user_id).child('incubator').child(incubator_id).remove()
                return response.status(200).json({
                    data: 'incubator removed',
                    message: 'success'
                })
            } else {
                return response.status(200).json({
                    data: 'Error incubator not found',
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