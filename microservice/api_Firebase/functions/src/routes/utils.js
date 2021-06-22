import express from 'express'
import { db } from '../config'

const router = express.Router()

// Mover tarea
router.patch('/movetask/:user_id', (request, response) => {
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
        const task1 = request.body.task1
        const task1_id = request.body.task1_id
        const task2 = request.body.task2
        if (!task1 || !task2 || !task1_id) {
            return response.status(404).json({
                data: 'No data set',
                message: 'error'
            })
        }
        db.ref("users").child(user_id).child(task1).child(task1_id).get().then((snapshot) => {
            if (snapshot.exists()) {
                let data = {
                    description: snapshot.val().description,
                    status_done: snapshot.val().status_done,
                    updated_date: (new Date()).toISOString()
                }
                db.ref('users').child(user_id).child(task2).child(task1_id).set(data)
                db.ref("users").child(user_id).child(task1).child(task1_id).remove()
                return response.status(200).json({
                    data: data,
                    message: 'success'
                })
            } else {
                response.status(404).json({
                    data: `Error ${task1} not found`,
                    message: 'error'
                })
            }
        }).catch((error) => {
            return response.status(404).json({
                data: error.message,
                message: 'error'
            })
        });
    } catch (error) {
        return response.status(404).json({
            data: error.message,
            message: 'error'
        })
    }
})

export default router