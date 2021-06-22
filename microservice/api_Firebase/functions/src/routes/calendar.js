import express from 'express'
import { db } from '../config'

const router = express.Router()

// crear calendar
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
        const date = request.body.date
        const start_time = request.body.start_time
        const final_time = request.body.final_time

        if (!description || !date || !start_time || !final_time) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }

        const newcalendar = {
            description: description,
            date: date,
            start_time: start_time,
            final_time: final_time,
            created_at: (new Date()).toISOString(),
            status_done: false
        }

        const key = db.ref('users').child(user_id).child('calendar').push(newcalendar).key

        response.status(201).json({
            data: {
                calendar_id: key,
                ...newcalendar
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

// Listar calendar
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
        db.ref("users").child(user_id).child('calendar').get().then((snapshot) => {
            if (snapshot.exists()) {
                for (const [key, value] of Object.entries(snapshot.val())) {
                    //console.log(key, value);
                    data.push({
                        calendar_id: key,
                        description: value.description,
                        date: value.date,
                        start_time: value.start_time,
                        final_time: value.final_time,
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

// Obtener un solo calendar
router.get('/:user_id/:calendar_id', (request, response) => {
    try {
        const calendar_id = request.params.calendar_id
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
        db.ref("users").child(user_id).child('calendar').child(calendar_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                let data = {
                    calendar_id: snapshot.key,
                    ...snapshot.val()
                }
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {
                return response.status(200).json({
                    data: 'Error calendar not found',
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

// Actualizar calendar
router.patch('/:user_id/:calendar_id', (request, response) => {
    try {
        const calendar_id = request.params.calendar_id
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
        const date = request.body.date
        const start_time = request.body.start_time
        const final_time = request.body.final_time
        if (!description && !status_done && !date && !start_time && !final_time) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }

        db.ref("users").child(user_id).child('calendar').child(calendar_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                if (description)
                    db.ref('users').child(user_id).child('calendar').child(calendar_id).child('description').set(description)
                if (status_done)
                    db.ref('users').child(user_id).child('calendar').child(calendar_id).child('status_done').set(status_done)
                if (date)
                    db.ref('users').child(user_id).child('calendar').child(calendar_id).child('date').set(date)
                if (start_time) {
                    let statustime = final_time ? comparetime(start_time, final_time) : comparetime(start_time, snapshot.val().final_time)
                    if (statustime)
                        db.ref('users').child(user_id).child('calendar').child(calendar_id).child('start_time').set(start_time)
                    else
                        return response.status(404).json({
                            data: 'start_time is not lower than final_time',
                            message: 'error'
                        })
                }
                if (final_time) {
                    let statustime = start_time ? true : comparetime(snapshot.val().start_time, final_time)
                    if (statustime)
                        db.ref('users').child(user_id).child('calendar').child(calendar_id).child('final_time').set(final_time)
                    else
                        return response.status(404).json({
                            data: 'start_time is not lower than final_time',
                            message: 'error'
                        })
                }

                db.ref('users').child(user_id).child('calendar').child(calendar_id).child('updated_at').set((new Date()).toISOString())
                let data = {
                    calendar_id: snapshot.key,
                    ...snapshot.val(),
                    ...(description && { description: description }),
                    ...(status_done && { status_done: status_done }),
                    ...(date && { date: date }),
                    ...(start_time && { start_time: start_time }),
                    ...(final_time && { final_time: final_time }),
                    updated_at: (new Date()).toISOString(),
                }
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {
                return response.status(404).json({
                    data: 'Error calendar not found',
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
router.delete('/:user_id/:calendar_id', (request, response) => {
    try {
        const calendar_id = request.params.calendar_id
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
        db.ref("users").child(user_id).child('calendar').child(calendar_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                db.ref("users").child(user_id).child('calendar').child(calendar_id).remove()
                return response.status(200).json({
                    data: 'calendar removed',
                    message: 'success'
                })
            } else {
                return response.status(200).json({
                    data: 'Error calendar not found',
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

//Validar diferencia entre 2 horas
const comparetime = (time1, time2) => {
    var time1Date = new Date("01/01/2000 " + time1)
    var time2Date = new Date("01/01/2000 " + time2)
    return time1Date < time2Date
}

export default router