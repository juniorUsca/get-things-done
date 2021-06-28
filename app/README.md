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

## Firebase GitHub

Se utiliza firebase para la identificacion de usuarios, por lo cual, firebase permite que una app guarde nuestros datos en la nube de forma segura mediante cuentas creadas por GitHub.

## Firebase Authentication

Se estara utilizando el firebase authentication, ya que nos proporciona servicios de backend, SDK sencillos de usar y bibliotecas de IU que estaran ya elaboradas para autenticar los usuarios en nuestra app, ya que con esto admite la autenticacion

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

export const loginWithGitHub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
}
```

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

## Firebase Facebook

Firebase puede integrar el servicio de Acceso con "Facebook" a nuestra app, para permitir que los usuarios se autentiquen con Firebase con sus respectivas cuenta de Facebook.

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

export const loginWithFacebook = () => {
    const facebookbProvider = new firebase.auth.FacebookAuthProvider()
    return firebase.auth().signInWithPopup(facebookbProvider)
}
```

## SDK Facebook Native

En las plataformas nativas, se requiere una biblioteca de terceros para instalar el SDK de Facebook y activar el flujo de autenticación.

Instalacion del flutter_facebook_auth:

## pubspec.yaml

```python
dependencies:
  flutter_facebook_auth: "^1.0.0"
```

## SDK Facebook Web

En la web, el SDK de Firebase brinda soporte para manejar automáticamente el flujo de autenticación usando los detalles de la aplicación de Facebook proporcionados en la consola de Firebase.

## Ejemplo

```python
FacebookAuthProvider facebookProvider = FacebookAuthProvider();

facebookProvider.addScope('email');
facebookProvider.setCustomParameters({
  'display': 'popup',
});
```

![facebook](https://user-images.githubusercontent.com/67810145/122856588-a8b4ee80-d2dc-11eb-8064-7e684ec24c67.PNG)

## Documentacion de codigo flutter "Jose Lazarinos"

Se dara una explicacion de cada parte del codigo de la barra lateral.

## Importaciones

```python
import 'package:app_fitness/pages/calculadora_imc.dart';
import 'package:app_fitness/pages/nosotros.dart';
import 'package:flutter/material.dart';
```

##  Arreglo de datos.

Estaran agregandose los datos como de nombres, imagenes y una breve descripcion de la comida.

```python
List<Container> listamos = List();

  var arreglox = [
    {
      "nombre": "Hamburguesa",
      "imagen": "hambur.jpg",
      "deporte": "rica hamburguesa "
    },
    {
      "nombre": "Pockor",
      "imagen": "palomitas-maiz.jpg",
      "deporte": "palomitas de maiz de sabor saladito y dulce"
    },
    {
      "nombre": "Ramen",
      "imagen": "ramen.jpg",
      "deporte": "rico ramen para disfrutar de todo sabores"
    },
    {
      "nombre": "Snikers",
      "imagen": "sniker.jpg",
      "deporte": "caramelos snikers para comer "
    },
    {
      "nombre": "Pollo a la brasa",
      "imagen": "pollo.jpg",
      "deporte": "pollo ala brasa rico para comerlo en familia"
    },
    {
      "nombre": "Helado de chocolate",
      "imagen": "helado-chocolate.jpg",
      "deporte": "rico helaod de chocolate"
    },
    {
      "nombre": "Paquete de hamburgues con papas y gasiosita",
      "imagen": "promosion.jpg",
      "deporte": "llebe su hamburguesa y sus papitas fritas con una gaseosa"
    },
    {
      "nombre": "Torta",
      "imagen": "torta.jpg",
      "deporte": "Torta de chocolate deliciosa y lleno de chocolate"
    },
    {
      "nombre": "chicharron",
      "imagen": "chicharron.jpg",
      "deporte": "chicharron con papa deliciosos"
    },
  ];
```

## Breve introduccion de Widgets.

Los widgets de Flutter se crean utilizando un marco moderno que se inspira en React . La idea central es que construyas tu interfaz de usuario a partir de widgets.

## Algo que Observar.

Cuando el estado de un widget cambia, el widget reconstruye su descripción, que el marco difiere de la descripción anterior para determinar los cambios mínimos necesarios en el árbol de renderización subyacente para la transición de un estado al siguiente.

## Uso de los widgets

```python
children: <Widget>[
            new UserAccountsDrawerHeader(
              accountName: new Text('Ejercicios'),
              accountEmail: new Text('codigoalphacol@gmail.com'),
              decoration: new BoxDecoration(
                  image: new DecorationImage(
                fit: BoxFit.fill,
                image: AssetImage('img/fondo-comida.jpg'),
              )),
            ),
            new Divider(),
            new ListTile(
              title: new Text("Cartelera"),
              trailing: new Icon(Icons.confirmation_number_sharp),
              onTap: () => Navigator.of(context).push(new MaterialPageRoute(
                builder: (BuildContext context) => Calculadora(),
              )),
            ),
            new Divider(),
            new ListTile(
              title: new Text("Soporte"),
              trailing: new Icon(Icons.help),
              onTap: () => Navigator.of(context).push(new MaterialPageRoute(
                builder: (BuildContext context) => Nosotros(),
              )),
            ),
          ],
        ),
      ),
```

## Partes a tomar en cuenta

```python
body: new GridView.count(
        crossAxisCount: 2, //numero de columas de la primera pagina pruebn con 1
        mainAxisSpacing: 0.1, //espacio entre card
        childAspectRatio: 0.700, //espacio largo de cada card
        children: listamos,
      ),
```

## Creaion de metodo

Se estara creando el metodo de detalle, lo cual, este se usa cuando pulsamos para ver segunda pantalla en la descripcion del ejercicio.

```python
class Detalle extends StatelessWidget {
  Detalle({this.nombre, this.imagen, this.deporte});
  final String nombre;
  final String imagen;
  final String deporte;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: new ListView(
// En esta parte nuevamente estamos aplicando widgets
        children: <Widget>[
          new Container(
              height: 387.0, //tamaño de la segunda imagen
              child: new Hero(
                tag: nombre,
                child: new Material(
                  child: new InkWell(
                    child: new Image.asset(
                      "img/$imagen",
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              )),
          new IniciarNombre(
            nombre: nombre,
          ),
// En esta parte estamos usando Iconos de flutter
          new IniciarIcon(),
          new Informacion(
            deporte: deporte,
          ),
        ],
      ),
    );
  }
}
```

## Icons Flutter

Identificadores de los iconos de diseño de materiales admitidos. Úselo con la clase Icon para mostrar iconos específicos. Los iconos se identifican por su nombre como se indica a continuación. No utilice puntos de código directamente, ya que están sujetos a cambios. 

## Nota
Para usar esta clase, asegúrese de establecer uses-material-design: true en el archivo pubspec.yaml de su proyecto en la sección flutter. Esto asegura que la fuente MaterialIcons esté incluida en su aplicación. Esta fuente se utiliza para mostrar los iconos. 

## Ejemplo
Si queremos usar estos iconos en diferentes colores deberiamos hacer lo siguiente:

![icon](https://user-images.githubusercontent.com/64169535/123715495-0d70cb80-d83e-11eb-9479-684c31968d5d.png)

```python
Row(
  mainAxisAlignment: MainAxisAlignment.spaceAround,
  children: const <Widget>[
    Icon(
      Icons.favorite,
      color: Colors.pink,
      size: 24.0,
      semanticLabel: 'Text to announce in accessibility modes',
    ),
    Icon(
      Icons.audiotrack,
      color: Colors.green,
      size: 30.0,
    ),
    Icon(
      Icons.beach_access,
      color: Colors.blue,
      size: 36.0,
    ),
  ],
)
```