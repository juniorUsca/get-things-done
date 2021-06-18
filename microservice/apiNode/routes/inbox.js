import express from 'express'
import gtd from '../index'
import uuid from 'uuid-random'

const router = express.Router()

// Listar inbox
router.get('/:id', (request, response) => {
    const user_id = request.params.id
    const gtdObj = searchByIDUser(user_id)
    if (gtdObj != null) {
        const inbox = gtdObj.inbox
        response.status(200).json({
            data: inbox,
            message: 'success'
        })
    } else {
        response.status(404).json({
            data: null,
            message: 'error'
        })

    }
})

// Obtener un solo inbox
router.get('/:user_id/:id', (request, response) => {
    const id = request.params.id
    const user_id = request.params.user_id
    const gtdObj = searchByIDUser(user_id)
    if (gtdObj !== null) {
        const inboxObj = searchByIDInbox(gtdObj.inbox, id)
        if (inboxObj !== null) {
            return response.status(200).json({
                data: inboxObj,
                message: 'success'
            })
        }
    }
    response.status(404).json({
        data: null,
        message: 'error'
    })
})

// crear inbox
router.post('/:user_id', (request, response) => {
    const user_id = request.params.user_id

    const gtdObj = searchByIDUser(user_id)

    if (!request.body.description) {
        return response.status(400).json({
            data: null,
            message: 'error'
        })
    }
    const newInbox = {
        id: uuid(),
        descroption: request.body.description,
        created_at: new Date()
    }
    gtdObj.inbox.push(newInbox)
    response.status(201).json({
        data: newInbox,
        message: 'success'
    })
})


// Actualizar inbox
router.patch('/:user_id/:id', (request, response) => {
    const user_id = request.params.user_id
    const id = request.params.id
    const gtdObj = searchByIDUser(user_id)
    const inboxObj = searchByIDInbox(gtdObj.inbox, id)

    //Permite cambiar valores agregados en el cuerpo
    let data = {
        ...inboxObj,
        ...(request.body.description && { description: request.body.description }),
        update_at: new Date()
    }

    let edited_status = editInboxFromGtd(gtdObj.inbox, user_id, id, data)
    if (edited_status != null) {
        response.status(200).json({
            data: data,
            message: 'success'
        })
    } else {
        return response.status(400).json({
            data: null,
            message: 'error'
        })
    }

})


// Eliminar entidad
router.delete('/:user_id/:id', (request, response) => {
    const user_id = request.params.user_id
    const id = request.params.id
    const gtdObj = searchByIDUser(user_id)
    if (gtdObj !== null) {
        const eliminate_status = removeIndexFromGtd(gtdObj.inbox, id)
        if (eliminate_status !== null) {
            return response.status(200).json({
                message: 'success'
            });
        }
    }
    response.status(404).json({
        message: 'error'
    })
});

//Funcion para obtener el usuario por su id
const searchByIDUser = (user_id) => {
    if (gtd == null) {
        console.log(1)
        return null
    } else {
        let gtdObj = gtd.find(obj => obj.user_id == user_id)
        if (gtdObj != null) {
            console.log(2)
            console.log(gtdObj)
            return gtdObj
        } else {
            console.log(3)
            return null
        }
    }
}


//Funcion para obtener el inbox por su id
const searchByIDInbox = (inbox, id) => {
    if (inbox == null) {
        return null
    } else {
        let inboxObj = inbox.find(obj => obj.id == id)
        if (inboxObj != null) {
            return inboxObj
        } else {
            return null
        }
    }
}

//Funcion para remover el inbox de la coleccion
const removeIndexFromGtd = (inbox, id) => {
    if (inbox == null) {
        return null
    } else {
        let index = inbox.findIndex(obj => obj.id == id)
        if (index != null && index != -1) {
            inbox.splice(index, 1);
            return true
        } else {
            return null
        }
    }

}

// Funcion para editar un inbox de la coleccion
const editInboxFromGtd = (inbox, user_id, id, data) => {
    if (gtd == null) {
        return null
    } else {
        let gtdObjIndex = gtd.findIndex(obj => obj.user_id == user_id)
        if (gtdObjIndex != null) {
            let inboxObjIndex = inbox.findIndex(obj => obj.id == id)
            if (inboxObjIndex != null) {
                gtd[gtdObjIndex].inbox[inboxObjIndex] = {...data }
                return true
            } else {
                return null
            }
        } else {
            return null
        }
    }

}

export default router