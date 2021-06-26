import Head from 'next/head'

const anotation = () => {

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return ( 
        <div>
            <Head>
                <script type="text/javascript" src="/js/grabar_audio.js"></script>
            </Head>
            <div className="card">
                <div className="card-header">
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTEzMi41ODMzMywyMS41aC05My4xNjY2N3Y4Nmw0Ni41ODMzMywyMS41bDQ2LjU4MzMzLDIxLjV6IiBmaWxsPSIjY2NjY2NjIj48L3BhdGg+PHBhdGggZD0iTTM5LjQxNjY3LDIxLjVoOTMuMTY2Njd2ODZsLTQ2LjU4MzMzLDIxLjVsLTQ2LjU4MzMzLDIxLjV6IiBmaWxsPSIjY2NjY2NjIj48L3BhdGg+PHBhdGggZD0iTTM5LjQxNjY3LDIxLjV2ODZsNDYuNTgzMzMsMjEuNWw0Ni41ODMzMywtMjEuNXYtODZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                    <h1>NUEVA ANOTACION</h1>
                </div>
                <div className="card-body">
                    <textarea className="textArea" onChange={handleChange} rows="6" placeholder="Nueva anotacion ..."/>
                    <p id="duracion"></p>
                    <select name="listaDeDispositivos" id="listaDeDispositivos"></select>
                </div>
                <div className="card-footer">
                    <button><a>Guardar Nota</a></button>
                    <figure title="Empezar a Grabar Nota de voz"><button id="btnComenzarGrabacion"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADcklEQVRoge2ZT2gUVxjAf9/MJmiwl7SS3fw5tgn0OGKxalHxkhIpPWxbmhZ66KGSCN5FSKH07p8NiOApghIPLUksvYSARkGyx0IVetFNstjqpYtLktn5eoggzp/MvNnZqWB+x+99b+b38WbmzXsPdtnl7UayuIiWy/bT5upBVfu4WurgMYJQQti3nUADWEN4KJ5UsbzFPmf5gUzhtXvvtgpY/eyTIcvzJkT5RmHAsHtNYcZrFSqDvy3V0jqkKmB99Oh+KehPqnwHdKe9+Us2Qa6p2Of755b+Me1sXED91JGvVbkE9Jr2jVF5JspkceHODaNeSRPVcbrWS3umBfneXM5ASLnSV2+ekWp1K1F+kqS1U06P6N5bwGhbdomR2yovyv1z1RdxmVZcgjpOV77yAPopuvfXP8ofxr5fsQWsl/ZMk6v8NgIne5u9FxLkRbM2dnhckJnstMwR9Kvi/PLN6PYIap8ffNfe6v4TeK8jZsl5rlIYjvrERj5CBbf7Z/5/eYBe8dwfoxpDR6A2emzQtt2/aH+SyopNFd7vn7v72N8QOgJ2wZ3kzZEH6EY5HdYQKECnsFDGO+9khgXfarlsh8Rf5+nKxx8Bg7lYGaAwUG/WHX88OAJqH89HyRwRPeGPBd8B0QO52KRAlQQjAB/ko5MCYdgfCvsKlXJQSYcG3cIK2JeDSlre8Qdif+bedMIKaORukZx//YGwAtZzEEmHBN0CBQg8yscmBcpDfyg4AiorucikQQm4BQuwvMVcZNIQ4hYooM9ZfgA8yUXIjMdF517VHwy+A1N4CtfzcUqOItfDtiJD5wGvVagAmx23Ss5GC7cS1hBawPZepVzrrJMJcnVo/v5qWEvkTOxuuecA473K7JFnKnbkmjiygKHf7z8XlTOdkTJA9fROm747/gsVF+7cEOVK9laJqZQW7s7ulBD7M9fXU5oQ+CU7p4QIC8VG4WxcWmwBMjvb8qQ5DnI7G7NEzCvNL2RpyY1LNNper5d6LoL+0J5bLJVio3A2iTykOeAYO/ylIpfJftfub5SJuGfej/GCpji/fLPVtTmCMg1smPYPYQPksrvVGjGVhzYP+Z6MHRqwsScFxoEh0+6KzLRwK1GTVBKyOWadwqqvHD0goidUcRCGUQZ4tb5uADXgEcoKlrdYdO5Vszhm3WWXt53/ACE4DcJT1KJvAAAAAElFTkSuQmCC" width="30"/></button></figure>
                    <figure title="Detener Grabacion"><button id="btnDetenerGrabacion"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAUElEQVRoge3PsQ2AMAADwcD+OycToBSIvJDuWjf+MQB44drs88iLvcef98kXXxBQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBNQE1ATUBMAwK8tt84BRE5T4tkAAAAASUVORK5CYII=" width="30"/></button></figure>
                    <figure title="Descargar Audio"><button id="btnDescargarGrabacion"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABpElEQVRIie3WvS9kURjH8e/DzR1maWYaJJuQuBqdtR1/g7e4QoKsarfZQoEKsQ3/gJdCQyJh4qWQsCrdFjtKBWMThQjFzqoGNxmPwk4yw8ycixuVX3fPc87zyX2KkyMY0rh2aJf/C/1A6Qetzikq5yIspyLe+KHb6BXrY5mgcNKeUnQkb1GoURgNJ22AsWJ9SkyQIgPmPQya9hihJ+PKn6oAoGDyDr1Dbw9J9kfz3HEXIqtA6Sv7plHtiX9rWM8s5PxR/NLZFNh4JQKwXRd1trIXckc3KXe1kfpeUVZeTCg7Vx49MVfShSEg5kq6Nlo/8EJst6LM6jz57tw+Lki+3QDda1p6+vdkSYU+30jI6tj/UneTr1gQeg4m8PNDyGovhBghP5gfxBdkwPYqQlabCQGQ5vmEAsS/Oj7GmFhUkUEAhW07Veb+Gv54Xexcpr/vmyHmSvr3pTOkMCYwUXlx1mFCsmN8M+RkUu4OYOZZZ/7nDS9V5Rzg08KflqCbN80etQIPz7LP84lphdGgkeyIMm2lIt54OGmjSj9CTaBC5oEZ9SbuAcJElptIKf7eAAAAAElFTkSuQmCC" width="30"/></button></figure>
                </div>
            </div>
            <style jsx >{`
                .card{
                    margin: 0 auto;
                    color: #858585;
                    width: 500px;
                    padding: 20px;
                    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.377);
                    border-radius: 20px;            
                }
                .card-header{
                    background: crimson;
                    color: white;
                    text-align: center;                   
                    margin: -20px;
                    padding: 15px;
                    border-radius: 20px 20px 0px 0px;
                    display: flex
                }
                .card-header h1{
                    width: 100%;
                    text-align: center;
                    padding: 8px;
                    font-size: 23px;
                    font-weight: bold;
                    font-family: Segoe UI
                }
                .card-body{
                    margin: -20px;
                    padding: 20px;
                    border-radius: 00px 00px 20px 20px;
                }
                .textArea{
                    width: 100%;
                    margin-top: 10px;
                    font-weight: bold;
                    padding: 5px
                }
                .textArea:focus{
                    color: #2E3133;
                    border-color: #858585;
                }
                .card-footer{
                    background: #F0F0F0;
                    margin: -20px;
                    padding: 15px;
                    border-radius: 00px 00px 20px 20px;
                    display: flex;
                    justify-content: space-between
                }
                a{
                    padding: 8px;
                    margin: 2px;
                    border-radius: 5px;
                    border: 1px solid white;
                    width: 100%;
                    text-align: center;
                    color: #333;
                    background-color: white;
                    text-decoration: none;
                    font-weight: bold;
                }
                a:hover{
                    color: white;
                    background: red;
                }
                
                figure {
                    border-radius: 100%;
                    display: block;
                    position: relative;
                }
            
                figure:after {
                    background-color: rgba(0, 0, 0, .5);
                    border-radius: 5px;
                    color: #fff;
                    content: attr(title);
                    opacity: 0;
                    padding: 6px 12px;
                    position: absolute;
                    left: 110%;
                    top: 30px;
                    transition: all .25s ease;
                    visibility: hidden;
                    white-space: nowrap;
                    left: 50%;
                    right: auto;
                    transform: translateX(-50%);
                }
            
                figure:hover:after {
                opacity: 1;
                visibility: visible;
                }
                
            `}
            </style>
            
        </div>
        )
}
 
export default anotation;