/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line consistent-return
const init = () => {
  const tieneSoporteUserMedia = () => { return !!(navigator.mediaDevices.getUserMedia) }

  // Si no soporta...
  // Amable aviso para que el mundo comience a usar navegadores decentes :v/
  if (typeof MediaRecorder === 'undefined' || !tieneSoporteUserMedia()) return alert('Tu navegador web no cumple los requisitos; por favor, actualiza a un navegador decente como Firefox o Google Chrome')

  // Declaración de elementos del DOM
  const $listaDeDispositivos = document.querySelector('#listaDeDispositivos')
  const $duracion = document.querySelector('#duracion')
  const $btnComenzarGrabacion = document.querySelector('#btnComenzarGrabacion')
  const $btnDetenerGrabacion = document.querySelector('#btnDetenerGrabacion')
  const $btnDescargarGrabacion = document.querySelector('#btnDescargarGrabacion')

  // Algunas funciones útiles //lista de dispositivos
  const limpiarSelect = () => {
    // eslint-disable-next-line no-plusplus
    for (let x = $listaDeDispositivos.options.length - 1; x >= 0; x--) {
      $listaDeDispositivos.options.remove(x)
    }
  }

  const segundosATiempo = (numeroDeSegundos) => {
    let horas = Math.floor(numeroDeSegundos / 60 / 60)
    numeroDeSegundos -= horas * 60 * 60
    let minutos = Math.floor(numeroDeSegundos / 60)
    numeroDeSegundos -= minutos * 60
    numeroDeSegundos = parseInt(numeroDeSegundos)
    if (horas < 10) horas = `0${horas}`
    if (minutos < 10) minutos = `0${minutos}`
    if (numeroDeSegundos < 10) numeroDeSegundos = `0${numeroDeSegundos}`

    return `${horas}:${minutos}:${numeroDeSegundos}`
  }
  // Variables "globales"
  let tiempoInicio; let mediaRecorder; let
    idIntervalo
  let blobAudio
  const refrescar = () => {
    $duracion.textContent = segundosATiempo((Date.now() - tiempoInicio) / 1000)
  }
  // Consulta la lista de dispositivos de entrada de audio y llena el select
  const llenarLista = () => {
    navigator
      .mediaDevices
      .enumerateDevices()
      .then((dispositivos) => {
        limpiarSelect()
        dispositivos.forEach((dispositivo, indice) => {
          if (dispositivo.kind === 'audioinput') {
            const $opcion = document.createElement('option')
            // Firefox no trae nada con label, que viva la privacidad
            // y que muera la compatibilidad :v
            $opcion.text = dispositivo.label || `Dispositivo ${indice + 1}`
            $opcion.value = dispositivo.deviceId
            $listaDeDispositivos.appendChild($opcion)
          }
        })
      })
  }
  // Ayudante para la duración, no ayuda en nada pero muestra algo informativo :v
  const comenzarAContar = () => {
    tiempoInicio = Date.now()
    idIntervalo = setInterval(refrescar, 500)
  }

  // Comienza a grabar el audio con el dispositivo seleccionado
  const comenzarAGrabar = () => {
    if (!$listaDeDispositivos.options.length) return alert('No hay dispositivos')
    // No permitir que se grabe doblemente
    if (mediaRecorder) return alert('Ya se está grabando')

    navigator.mediaDevices.getUserMedia({
      audio: {
        deviceId: $listaDeDispositivos.value,
      },
    })
      .then(
        (stream) => {
          // Comenzar a grabar con el stream
          mediaRecorder = new MediaRecorder(stream)
          mediaRecorder.start()
          comenzarAContar()
          // En el arreglo pondremos los datos que traiga el evento dataavailable
          const fragmentosDeAudio = []
          // Escuchar cuando haya datos disponibles
          mediaRecorder.addEventListener('dataavailable', (evento) => {
            // Y agregarlos a los fragmentos
            fragmentosDeAudio.push(evento.data)
          })
          // Cuando se detenga (haciendo click en el botón) se ejecuta esto
          mediaRecorder.addEventListener('stop', () => {
            // Detener el stream
            stream.getTracks().forEach((track) => { return track.stop() })
            // Detener la cuenta regresiva
            detenerConteo()
            // Convertir los fragmentos a un objeto binario
            // const blobAudio = new Blob(fragmentosDeAudio);

            blobAudio = new Blob(fragmentosDeAudio)
            // console.log(fragmentosDeAudio)
          })
        },
      )
      .catch((error) => {
        // Aquí maneja el error, tal vez no dieron permiso
        console.log(error)
      })
  }
  //
  const detenerConteo = () => {
    clearInterval(idIntervalo)
    tiempoInicio = null
    $duracion.textContent = ''
  }
  //
  const detenerGrabacion = () => {
    if (!mediaRecorder) return alert('No se está grabando')
    mediaRecorder.stop()
    mediaRecorder = null
  }
  //
  const descargarGrabacion = () => {
    if (!blobAudio) return alert('No se grabo ningun audio')
    // Crear una URL para descargar
    const urlParaDescargar = URL.createObjectURL(blobAudio)
    // Crear un elemento <a> invisible para descargar el audio
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style = 'display: none'
    a.href = urlParaDescargar
    a.download = 'grabacion_nota.me.mp3'
    // Hacer click en el enlace
    a.click()
    // Remover el objeto
    window.URL.revokeObjectURL(urlParaDescargar)
  }

  $btnComenzarGrabacion.addEventListener('click', comenzarAGrabar)
  $btnDetenerGrabacion.addEventListener('click', detenerGrabacion)
  $btnDescargarGrabacion.addEventListener('click', descargarGrabacion)

  // Cuando ya hemos configurado lo necesario allá arriba llenamos la lista

  llenarLista()
}

document.addEventListener('DOMContentLoaded', init)
