import express from 'express'
import inbox from './routes/inbox'
// import todo from './routes/todo'
import todo from './routes/components/todo/network'

const app = express()
app.use(express.json())

const PORT = 3001;

//Propuesta de la estructura de base de datos
let gtd = [
	{
		user_id: 1,
		inbox: [{
			id: 11,
			description: 'regar plantas',
			created_at: 'Tue Jun 15 2021 01:58:02 GMT-0500'
		},
		{
			id: 12,
			description: 'hacer mercado',
			created_at: 'Tue Jun 15 2021 02:28:02 GMT-0500'
		},
		{
			id: 13,
			description: 'presentar laboratorio dwa',
			created_at: 'Tue Jun 15 2021 02:58:02 GMT-0500'
		}
		],
		calendar: [],
		ticke_file: [],
		incubator: [],
		next_actions: []
	},
	{
		user_id: 2,
		inbox: [{
			id: 21,
			description: 'hacer limpieza',
			created_at: 'Tue Jun 15 2021 01:58:02 GMT-0500'
		},
		{
			id: 22,
			description: 'felicitar a mi primo',
			created_at: 'Tue Jun 15 2021 02:28:02 GMT-0500'
		},
		],
		calendar: [],
		ticke_file: [],
		incubator: [],
		next_actions: []
	}
]

//Rutas

//Ruta principal
app.use('/api/', todo)

//Ruta inbox
app.use('/api/inbox/', inbox)

if(process.env.NODE_ENV != "test"){
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export {app}

export default gtd