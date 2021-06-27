/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
(function () {
  // Variables
  const lista = document.getElementById('lista')
  const tareaInput = document.getElementById('tareaInput')
  const btnNuevaTarea = document.getElementById('btn-agregar')

  // Funciones
  const agregarTarea = function () {
    const tarea = tareaInput.value
    const nuevaTarea = document.createElement('li')
    const enlace = document.createElement('a')
    const contenido = document.createTextNode(tarea)

    if (tarea === '') {
      tareaInput.setAttribute('placeholder', 'Agrega una tarea valida')
      tareaInput.className = 'error'
      return false
    }

    // Agregamos el contenido al enlace
    enlace.appendChild(contenido)
    // Le establecemos un atributo href
    enlace.setAttribute('href', '#')
    // Agrergamos el enlace (a) a la nueva tarea (li)
    nuevaTarea.appendChild(enlace)
    // Agregamos la nueva tarea a la lista
    lista.appendChild(nuevaTarea)

    tareaInput.value = ''

    for (let i = 0; i <= lista.children.length - 1; i++) {
      lista.children[i].addEventListener('click', function () {
        this.parentNode.removeChild(this)
      })
    }
  }
  const comprobarInput = function () {
    tareaInput.className = ''
    teareaInput.setAttribute('placeholder', 'Agrega tu tarea')
  }

  const eleminarTarea = function () {
    this.parentNode.removeChild(this)
  }

  // Eventos

  // Agregar Tarea
  btnNuevaTarea.addEventListener('click', agregarTarea)

  // Comprobar Input
  tareaInput.addEventListener('click', comprobarInput)

  // Borrando Elementos de la lista
  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener('click', eleminarTarea)
  }
}())
