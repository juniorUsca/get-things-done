import express from 'express'
import { db } from '../config'

const router = express.Router()


// crear tickerfile
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
        const date_remainder = request.body.date_remainder

        if (!description || !date_remainder) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }

        const newtickerfile = {
            description: description,
            date_remainder: date_remainder,
            created_at: (new Date()).toISOString(),
            status_done: false
        }

        const key = db.ref('users').child(user_id).child('tickerfile').push(newtickerfile).key

        response.status(201).json({
            data: {
                tickerfile_id: key,
                ...newtickerfile
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

// Listar tickerfile
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
        db.ref("users").child(user_id).child('tickerfile').get().then((snapshot) => {
            if (snapshot.exists()) {
                for (const [key, value] of Object.entries(snapshot.val())) {
                    //console.log(key, value);
                    data.push({
                        tickerfile_id: key,
                        description: value.description,
                        date_remainder: value.date_remainder,
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

// Obtener un solo tickerfile
router.get('/:user_id/:tickerfile_id', (request, response) => {
    try {
        const tickerfile_id = request.params.tickerfile_id
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
        db.ref("users").child(user_id).child('tickerfile').child(tickerfile_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                let data = {
                    tickerfile_id: snapshot.key,
                    ...snapshot.val()
                }
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {
                return response.status(200).json({
                    data: 'Error tickerfile not found',
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

// Actualizar tickerfile
router.patch('/:user_id/:tickerfile_id', (request, response) => {
    try {
        const tickerfile_id = request.params.tickerfile_id
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
        const date_remainder = request.body.date_remainder
        if (!description && !status_done && !date_remainder) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }

        db.ref("users").child(user_id).child('tickerfile').child(tickerfile_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                if (description)
                    db.ref('users').child(user_id).child('tickerfile').child(tickerfile_id).child('description').set(description)
                if (status_done)
                    db.ref('users').child(user_id).child('tickerfile').child(tickerfile_id).child('status_done').set(status_done)
                if (date_remainder)
                    db.ref('users').child(user_id).child('tickerfile').child(tickerfile_id).child('date_remainder').set(date_remainder)

                db.ref('users').child(user_id).child('tickerfile').child(tickerfile_id).child('updated_at').set((new Date()).toISOString())
                let data = {
                    tickerfile_id: snapshot.key,
                    ...snapshot.val(),
                    ...(description && { description: description }),
                    ...(status_done && { status_done: status_done }),
                    ...(date_remainder && { date_remainder: date_remainder }),
                    updated_at: (new Date()).toISOString(),
                }
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {

                return response.status(404).json({
                    data: 'Error tickerfile not found',
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
router.delete('/:user_id/:tickerfile_id', (request, response) => {
    try {
        const tickerfile_id = request.params.tickerfile_id
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
        db.ref("users").child(user_id).child('tickerfile').child(tickerfile_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                db.ref("users").child(user_id).child('tickerfile').child(tickerfile_id).remove()
                return response.status(200).json({
                    data: 'tickerfile removed',
                    message: 'success'
                })
            } else {
                return response.status(200).json({
                    data: 'Error tickerfile not found',
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