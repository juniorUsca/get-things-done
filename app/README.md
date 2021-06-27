# Proyecto App

_get-things-done_

### Pre-requisitos 📋

_Si no tiene Node.js instalado, instálelo desde [aquí](https://nodejs.org/es/) . Necesitará Node.js versión 10.13 o posterior.

## Comenzando 🚀

_Las siguientes instrucciones son para ejecutar el proyecto en tu entorno local._

_debemos instalar segun el archivo package-lock.json con el siguiente comando_

```
npm ci
```

_Ejecutar el proyecto siguiente comando_

```
npm run dev
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_
Font Awesome es la forma más popular de agregar íconos de fuentes a su sitio web.
* [next](https://nextjs.org/) - El framework de JavaScript
* [react](https://es.reactjs.org/) - Libreria de JavaScript
* [fortawesome](https://fontawesome.com/) - Forma de agregar iconos y fuentes a un sitio web.

## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Geist-ui/React

Introducción

Acerca de

Geist UI es una implementación de React para estilos procedente de Diseño de Vercel.

El diseño de Vercel es conciso y estético, esta es una razón importante para la popularidad de Vercel. Ahora puede implementar los estilos en su propio proyecto React.

Geist UI es un sistema de diseño de código abierto para crear sitios web y aplicaciones modernos, todos nuestros proyectos son de código abierto.

## Firebase

se verifico que cada login de red social funciona

![github](https://user-images.githubusercontent.com/67810145/122855731-460f2300-d2db-11eb-9fe7-248b443924be.PNG)

## Firebase Google

Se utiliza firebase para la identificacion de usuarios, por lo cual, firebase permite que una app guarde nuestros datos en la nube de forma segura.

## Firebase Authentication

Se utliza el firebase Authetication por que nos proporciona servicios de backend, SDK sencillos de usar y bibliotecas de IU que estaran ya elaboradas para autenticar los usuarios en nuestra app, ya que con esto admite la autenticacion mediante contraseñas, numeros de telefono, proveedores de identidad federada populares como son "Google", "Facebook" y "Twitter" entre otros más.

## Uso

```python
import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(googleProvider)
}
```
## Contribucion

Firebase Authentication se integra estrechamente con otros servicios de Firebase y aprovecha estándares de la industria como OAuth 2.0 y OpenID Connect, por lo que se puede integrar con facilidad en tu backend personalizado.

![google](https://user-images.githubusercontent.com/67810145/122856575-a2267700-d2dc-11eb-8c37-84285feec3ed.PNG)

![facebook](https://user-images.githubusercontent.com/67810145/122856588-a8b4ee80-d2dc-11eb-8064-7e684ec24c67.PNG)