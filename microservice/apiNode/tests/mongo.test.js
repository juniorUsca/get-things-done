import supertest from 'supertest'
import {app} from '../mongodb/index'
import 'regenerator-runtime/runtime'

const api = supertest(app)
const newDocument = {
    description: "documento de prueba",
    arreglo: []
}
let idTest = "0"

beforeAll(async ()=>{
    await api.delete('/pruebas')
})

describe( 'Tests a la ruta /pruebas - Método GET', () => {
    test('Se retorna la información en formato JSON', async () =>{
        await api
        .get('/pruebas')
        .expect(200)
        .expect('Content-Type',/application\/json/)
    })

    test('Se retorna inicialmente un arreglo vacío', async () =>{
        const response = await api.get('/pruebas')
        expect(response.body.body).toHaveLength(0)
    })
})

describe( 'Tests a la ruta /pruebas - Método POST', () => {
    test('Se retorna la información en formato JSON', async () =>{
        const initialRsp = await api.get('/pruebas')
        const initialLg = initialRsp.body.body.length
        const responsePost = await api.post('/pruebas').send(newDocument)
        idTest = responsePost.body.body._id
        const responseGet = await api.get('/pruebas')
        expect(responseGet.body.body).toHaveLength(initialLg + 1)
    })
})

describe( 'Tests a la ruta /pruebas/<id> - Método GET', () => {
    test('Se retorna la información en formato JSON', async () =>{
        await api
        .get(`/pruebas/${idTest}`)
        .expect(200)
        .expect('Content-Type',/application\/json/)
    })

    test('Se retorna la información añadida en el test de POST', async () =>{
        const response = await api.get(`/pruebas/${idTest}`)
        expect(response.body.body.description).toBe(newDocument.description)
    })
})

describe( 'Tests a la ruta /pruebas/<id> - Método PUT', () => {
    test('Se modifica el contenido de determinado atributo', async () =>{
        await api.put(`/pruebas/${idTest}`).send({description: "documento de prueba - actualizado"})
        const response = await api.get(`/pruebas/${idTest}`)
        expect(response.body.body.description).toBe("documento de prueba - actualizado")
    })
})

describe( 'Tests a la ruta /pruebas/<id>/push - Método PUT', () => {
    test('Se añade un elemento a los atributos de tipo arreglo', async () =>{
        await api.put(`/pruebas/${idTest}/push`).send({arreglo: "nuevo item"})
        const response = await api.get(`/pruebas/${idTest}`)
        expect(response.body.body.arreglo).toHaveLength(newDocument.arreglo.length + 1)
    })
})

describe( 'Tests a la ruta /pruebas/<id>/push - Método DELETE', () => {
    test('Se elimina un documento de la colección', async () =>{
        const initialRsp = await api.get('/pruebas')
        await api.delete(`/pruebas/${idTest}`)
        const finalRsp = await api.get('/pruebas')
        expect(finalRsp.body.body).toHaveLength(initialRsp.body.body.length - 1)
    })
})

describe( 'Tests a la ruta /pruebas/<id>/push - Método DELETE', () => {
    test('Se añade un elemento a los atributos de tipo arreglo', async () =>{
        await api.delete('/pruebas')
        const response = await api.get('/pruebas')
        expect(response.body.body).toHaveLength(0)
    })
})