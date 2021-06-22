import express from 'express'
import admin from 'firebase-admin'
import user from './routes/user'
import { db } from './config'
import inbox from './routes/inbox'
import tickerfile from './routes/tickerfile'
import incubator from './routes/incubator'
import calendar from './routes/calendar'
import utils from './routes/utils'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3001;


//Datos de prueba
let gtd = [{
            user_id: 'usuario1',
            created_at: (new Date()).toISOString(),
            inbox: [{
                    description: 'regar plantas',
                    created_at: (new Date()).toISOString()
                },
                {
                    description: 'hacer mercado',
                    created_at: (new Date()).toISOString()
                },
                {
                    description: 'presentar laboratorio dwa',
                    created_at: (new Date()).toISOString()
                }
            ],
            calendar: [],
            ticke_file: [],
            incubator: [],
            next_actions: []
        },
        {
            user_id: 'usuario2',
            created_at: (new Date()).toISOString(),
            inbox: [{
                    description: 'hacer limpieza',
                    created_at: (new Date()).toISOString()
                },
                {
                    description: 'felicitar a mi primo',
                    created_at: (new Date()).toISOString()
                },
            ],
            calendar: [],
            ticke_file: [],
            incubator: [],
            next_actions: []
        }
    ]
    /*
    try {
        gtd.map(user => {
            db.ref('users').child(user.user_id).set({ created_at: user.created_at })
            user.inbox.map(inbox => {
                db.ref('users').child(user.user_id).child('inbox').push(inbox)
            })
            user.ticke_file.map(ticke_file => {
                db.ref('users_3').child(user.user_id).child('ticke_file').push(ticke_file)
            })
            user.incubator.map(incubator => {
                db.ref('users_3').child(user.user_id).child('incubator').push(incubator)
            })
            user.calendar.map(calendar => {
                db.ref('users_3').child(user.user_id).child('calendar').push(calendar)
            })
            user.next_actions.map(next_actions => {
                db.ref('users_3').child(user.user_id).child('next_actions').push(next_actions)
            })
        })
    } catch (error) {
        console.log(error)

    }
*/
    //Ruta Usuarios
app.use('/api/', user)

//Ruta inbox
app.use('/api/inbox/', inbox)

//Ruta tickerfile
app.use('/api/tickerfile/', tickerfile)

//Ruta incubator
app.use('/api/incubator/', incubator)

//Ruta calendar
app.use('/api/calendar/', calendar)

//Ruta utils
app.use('/api/utils/', utils)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});