import express from 'express'
import { db } from '../config'

const router = express.Router()

// crear usuario - nodo
router.post('/new-user/', (request, response) => {

    //db.ref('usuarios2').push('hi')
    const today = new Date()
    const todayDate = today.toString()
    try {
        const user_id = request.body.user_id
        const newUser = {
            created_at: (new Date()).toISOString()
        }
        db.ref("users").child(user_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                response.status(404).json({
                    data: 'User already exist',
                    message: 'error'
                })
            } else {
                db.ref('users').child(user_id).set(newUser)
                response.status(201).json({
                    data: user_id,
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

export default router