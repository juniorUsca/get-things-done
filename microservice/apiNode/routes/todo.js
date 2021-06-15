import express from 'express'
import gtd from '../index'

const router = express.Router()

// Listar gtd
router.get('/', (request, response) => {
    if (gtd != null) {
        response.status(200).json({
            data: gtd,
            message: 'success'
        })
    } else {
        response.status(404).json({
            data: null,
            message: 'error'
        })

    }
})

// Obtener un solo gtd
router.get('/:id', (request, response) => {
    const id = request.params.id
    console.log(id)
    const gtdObj = searchByIDUser(id)
    if (gtdObj !== null) {
        response.status(200).json({
            data: gtdObj,
            message: 'success'
        })
    } else {
        response.status(404).json({
            data: null,
            message: 'error'
        })
    }
})

//Funcion para obtener el usuario por su id
const searchByIDUser = (user_id) => {
    if (gtd == null) {
        console.log(1)
        return null
    } else {
        let gtdObj = gtd.find(obj => obj.user_id == user_id)
        if (gtdObj != null) {
            console.log(2)
            return gtdObj
        } else {

            console.log(3)
            return null
        }
    }
}

export default router