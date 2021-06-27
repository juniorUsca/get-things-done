import React from 'react'
import SnapBar from './SnapBar'

const report = () => {
  return (
    <div className="contenedor">
      <SnapBar />
      <div className="reports">
        <form>
          <label htmlFor="fname">Nombre</label>
          <input type="text" id="fname" name="firstname" placeholder="Tu nombre.." />

          <label htmlFor="problem">Causa</label>
          <select id="problem" name="problem">
            <option value="">------</option>
            <option value="australia">Problema</option>
            <option value="canada">Duda</option>
          </select>

          <label htmlFor="subject">Contexto</label>
          <textarea id="subject" name="subject" placeholder="Cuentanos que sucede.." rows="7" />

          <button id="sub-mit" type="submit">Enviar</button>
        </form>
      </div>
      <style jsx>
        {`
                * {
                    box-sizing: border-box;
                    font-family: Arial, Helvetica, sans-serif;
                }
                
                input,select, textarea {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                    margin-top: 6px;
                    margin-bottom: 16px;
                    resize: vertical;
                }
                .contenedor{
                    width: 100%;
                    height: 100vh;
                    background: linear-gradient(to right, #CD6155, #505BDA);
                    position: relative;
                    overflow: hidden;
                }
                
                button {
                    background-color: #ff0080;
                    color: white;
                    padding: 12px 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    width: 100%;
                }
                
                button:hover {
                    background-color: #45a049;
                }
                
                .reports {
                    border-radius: 5px;
                    background-color: #800080;
                    padding: 50px;
                    box-sizing: border-box;
                    margin-top: 150px;
                    margin-left: 450px;
                    margin-right: 450px;

                }
                
                label {
                    color: white;
                    font-size : 20px;
                }
            `}
      </style>
    </div>

  )
}
export default report
