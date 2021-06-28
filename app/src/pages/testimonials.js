import React from 'react'


const report = () => {
    return (
        <center>
        <div className="container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLH_jPwFHDjpkazI5TBSylbhyCQANi6ot6iEcjGDJEZLfJ1uytH2ZT9Nj5JurNyA2r6M&usqp=CAU" alt="Avatar" id="1"/>
    <p><span>Chris Stones:</span> Usuario de la aplicacion.</p>
    <p>Esta aplicacion es increible.</p>
        </div>

        <div className="container">
        <img src="https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg" alt="Avatar" id="2"/>
        <p><span >Rebecca Flester:</span> Usuario de la aplicacion.</p>
        <p>Esta aplicacion me ayuda a administrar mejor mi tiempo.</p>
        </div>
        <style jsx>
        {`
            .container {
                border: 2px solid #ccc;
                background-color: #eee;
                border-radius: 5px;
                padding: 16px;
                margin: 16px 0;
              }
              .container::after {
                content: "";
                clear: both;
                display: table;
              }
              .container img {
                float: left;
                margin-right: 20px;
                border-radius: 50%;
              }
              .container span {
                font-size: 20px;
                margin-right: 15px;
              }
              .container img {
                  margin: auto;
                  float: none;
                  display: block;
                }
              }
        `}
        </style>
        </center>
            
    )
  }
  export default report
  