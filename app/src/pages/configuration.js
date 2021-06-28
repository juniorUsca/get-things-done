import React from 'react'
import SnapBar from './SnapBar'


const Configuration = () => {
  return (
    <div className ="container">
        <SnapBar />
<div className="row justify-content-center">
    <div className="col-12 col-lg-10 col-xl-8 mx-auto">
        <h2 className="h3 mb-4 page-title">Configuracion</h2>
        <div className="my-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Notificaciones</a>
                </li>
            </ul>
            <h5 className="mb-0 mt-5">Configuracion de Notificaciones</h5>
            <p>Selecciona las Notificaciones que quieres activar:</p>
            <hr className="my-4" />
            <strong className="mb-0">Seguridad</strong>
            <p>Control de alerta de seguridad se le notificará.</p>
            <div className="list-group mb-5 shadow">
                <div className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col">
                            <strong className="mb-0">Notificaciones de actividad inusual</strong>
                            <p className="text-muted mb-0">Estas notificaciones te informaran de cualquier actividad inusual.</p>
                        </div>
                        <div className="col-auto">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="alert1" checked="" />
                                <span className="custom-control-label"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col">
                            <strong className="mb-0">Actividad de calendario no autorizada</strong>
                            <p className="text-muted mb-0">Estas notificaciones te informaran de cualquien actividad que no hayas agregado a tu calendario.</p>
                        </div>
                        <div className="col-auto">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="alert2" />
                                <span className="custom-control-label"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <strong className="mb-0">Sistema y apariencia</strong>
            <p>Selecciona la apariencia que quieres activar:.</p>
            <div className="list-group mb-5 shadow">
                <div className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col">
                            <strong className="mb-0">Activar modo oscuro</strong>
                            <p className="text-muted mb-0">Permite activar activar el modo oscuro.</p>
                        </div>
                        <div className="col-auto">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="alert3" checked="" />
                                <span className="custom-control-label"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col">
                            <strong className="mb-0">Notificarme por correo electrónico para recibir las últimas noticias</strong>
                            <p className="text-muted mb-0">Recibe las ultimas noticias sobre actualizacion de la aplicacion.</p>
                        </div>
                        <div className="col-auto">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="alert4" checked="" />
                                <span className="custom-control-label"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col">
                            <strong className="mb-0">Notificarme sobre sugerencias sobre el uso de la cuenta</strong>
                            <p className="text-muted mb-0">Te ayudamos a tener un manejo mas sencillo de tu cuenta.</p>
                        </div>
                        <div className="col-auto">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="alert5" />
                                <span className="custom-control-label"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <style jsx>
        {`
            *{
                background: linear-gradient(to right, #CD6155, #505BDA);
            }
            .container{
                color: white;
                text-align: center;
                
            }
        `}
    </style>
</div>
    
  )
}

export default Configuration;