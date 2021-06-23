import React from "react";
import Head from "next/head";


const welcome = () => {
    return (

        <div>
            <Head>
                    // Responsive meta tag
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    //  bootstrap CDN
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
            </Head>

            <body>
                <div class="titulo">
                        
                </div>

                <div class="principal">
                    <div class="wrap">
                        <form class="formulario" action="agregarTarea">
                            <input type="text" id="tareaInput" placeholder="Agrega tu tarea"></input>
                            <button type="button" class="btn btn-primary btn-lg">Agregar Tarea</button>
                        </form>
                    </div>
                
                </div>
                <div class="tareas">
                    <div class="wrap">
                        <ul class="list-group" id="lista">
                            <li class="list-group-item">1: Comprar comida para el perro</li>
                            <li class="list-group-item">2: Realizar la tarea</li>
                            <li class="list-group-item">3: Llamar a mi padre</li>
                        </ul>
                    </div>
                </div>
                
            </body>
                
            


        </div>
        
        
    )

}


export default welcome;