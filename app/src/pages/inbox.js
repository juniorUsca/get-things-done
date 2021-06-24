import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/layout' // Este componente nos permite mantener un mismo 

export default function Inbox() {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossorigin="anonymous"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossorigin="anonymous">
                </script>
                <script src="pages/agregar.js"></script>
            */}
                <title>Inbox</title>
            </Head>
            <h1 className="text-3xl">Inbox</h1>
            <div>
                <body>
                    <div className="titulo">
                    </div>
                    <div className="principal">
                        <div className="wrap">
                            <form className="formulario" action="agregarTarea">
                                <input type="text" id="tareaInput" placeholder="Agrega tu tarea"></input>
                                <button type="button" className="btn btn-primary btn-lg">Agregar Tarea</button>
                            </form>
                        </div>

                    </div>
                    <div className="tareas">
                        <div className="wrap">
                            <ul className="list-group" id="lista">
                                <li className="list-group-item">1: Comprar comida para el perro</li>
                                <li className="list-group-item">2: Realizar la tarea</li>
                                <li className="list-group-item">3: Llamar a mi padre</li>
                            </ul>
                        </div>
                    </div>

                </body>
            </div>
        </Layout>
    )
}
