import supertest from 'supertest'
import gtd, {app} from '../index'
import 'regenerator-runtime/runtime'

const api = supertest(app)

describe( 'Tests a la ruta /api/inbox/1 - Método GET', () => {
    test('Se retorna la información en formato JSON', async () =>{
        await api
        .get('/api/inbox/1')
        .expect(200)
        .expect('Content-Type',/application\/json/)
    })

    test(`El usuario con el ID 1, tiene 3 tareas`, async () =>{
        const response = await api.get("/api/inbox/1")
        const expectedLength = gtd.find(obj => obj.user_id == 1).inbox.length
        expect(response.body.data).toHaveLength(expectedLength)
    })

    test("Busqueda incorrecta - Usuario inexistente", async () =>{
        await api
        .get('/api/inbox/1000')
        .expect(404)
        .expect('Content-Type',/application\/json/)
    })
})

describe( 'Tests a la ruta /api/inbox/1/11 - Método GET', () => {
    test('Se retorna la información en formato JSON', async () =>{
        await api
        .get('/api/inbox/1')
        .expect(200)
        .expect('Content-Type',/application\/json/)
    })

    test('La primera tarea del usuario con el ID 1, es "regar plantas"', async () =>{
        const response = await api.get("/api/inbox/1/11")
        console.log(response.body)
        const expectedTask = response.body.data.description
        expect(expectedTask).toBe("regar plantas")
    })

    test("Busqueda incorrecta - Usuario inexistente", async () =>{
        await api
        .get('/api/inbox/1000/1')
        .expect(404)
        .expect('Content-Type',/application\/json/)
    })

    test("Busqueda incorrecta - Inbox inexistente", async () =>{
        await api
        .get('/api/inbox/1/1000')
        .expect(404)
        .expect('Content-Type',/application\/json/)
    })
})

describe( 'Tests a la ruta /api/inbox/1 - Método POST', () => {
    test("Agregar inbox - Con valor description", async () =>{
        let initialLg = gtd[0].inbox.length
        const newInbox = {
            description: "almuerzo familiar"
        }
        await api.post('/api/inbox/1')
            .send(newInbox)
            .expect(201)
            .expect('Content-Type',/application\/json/)
    
        const response = await api.get('/api/inbox/1')
        expect(response.body.data).toHaveLength(initialLg + 1)
    })

    test("Agregar inbox - Sin valor description", async () =>{
        let initialLg = gtd[0].inbox.length
        const newInbox = {
            test: "almuerzo familiar"
        }
        await api.post('/api/inbox/1')
            .send(newInbox)
            .expect(400)
            .expect('Content-Type',/application\/json/)
    
        const response = await api.get('/api/inbox/1')
        expect(response.body.data).toHaveLength(initialLg)
    })
})

describe( 'Tests a la ruta /api/inbox/1/11 - Método PATCH', () => {
    test("Editar inbox - Con ID de usuario inexistente", async () =>{
        const newInbox = {
            description: "almuerzo familiar"
        }
        await api.patch('/api/inbox/1000/11')
            .send(newInbox)
            .expect(404)
            .expect('Content-Type',/application\/json/)
    })

    test("Editar inbox - Con ID de inbox inexistente", async () =>{
        const newInbox = {
            description: "almuerzo familiar"
        }
        await api.patch('/api/inbox/1/1000')
            .send(newInbox)
            .expect(404)
            .expect('Content-Type',/application\/json/)
    })

    test("Editar inbox - Con ID's correctos", async () =>{
        const newInbox = {
            description: "almuerzo familiar"
        }
        await api.patch('/api/inbox/1/11')
            .send(newInbox)
            .expect(200)
            .expect('Content-Type',/application\/json/)
    
        const response = await api.get('/api/inbox/1/11')
        expect(response.body.data.description).toBe(newInbox.description)
    })
})


describe( 'Tests a la ruta /api/inbox/1/11 - Método DELETE', () => {
    test("Eliminar inbox - Con ID de usuario inexistente", async () =>{
        await api.delete('/api/inbox/1000/11')
            .expect(404)
            .expect('Content-Type',/application\/json/)
    })

    test("Eliminar inbox - Con ID de inbox inexistente", async () =>{
        await api.delete('/api/inbox/1/1000')
            .expect(404)
            .expect('Content-Type',/application\/json/)
    })

    test("Eliminar inbox - Con ID's correctos", async () =>{
        let initialLg = gtd[0].inbox.length
        await api.delete('/api/inbox/1/11')
            .expect(200)
            .expect('Content-Type',/application\/json/)
    
        const response = await api.get('/api/inbox/1')
        expect(response.body.data).toHaveLength(initialLg - 1)
    })
})