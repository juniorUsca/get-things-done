import 'package:flutter/material.dart';
import 'package:dribbbledanimation/Components/nosotros.dart';
import 'package:dribbbledanimation/Screens/Login/index.dart';

void main() {
  runApp(MaterialApp(
    title: 'Suministro de comida',
    home: new Comida(),
  ));
}

class Comida extends StatefulWidget {
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Comida> {
  //creamos un arreglo de datos imagenes y nombre ejercicio
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

  _listado() async {
    for (var i = 0; i < arreglox.length; i++) {
      final arregloxyz = arreglox[i];
      final String imagen = arregloxyz["imagen"];

      listamos.add(new Container(
        padding: new EdgeInsets.all(10.0),
        child: new Card(
          child: new Column(
            children: <Widget>[
              new Hero(
                tag: arregloxyz['nombre'],
                child: new Material(
                  child: new InkWell(
                    onTap: () =>
                        Navigator.of(context).push(new MaterialPageRoute(
                      builder: (BuildContext context) => new Detalle(
                          nombre: arregloxyz['nombre'],
                          imagen: imagen,
                          deporte: arregloxyz['deporte']),
                    )),
                    child: new Image.asset("img/$imagen", fit: BoxFit.contain),
                  ),
                ),
              ),
              new Padding(
                padding: new EdgeInsets.all(3.0),
              ),
              new Text(
                arregloxyz['nombre'],
                style: new TextStyle(fontSize: 20.0),
              ),
            ],
          ),
        ),
      ));
    }
  }

  @override
  void initState() {
    _listado();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: new Text('Lista de comidas'),
        backgroundColor: Colors.orange,
      ),
      drawer: new Drawer(
        child: new ListView(
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
              title: new Text("Login"),
              trailing: new Icon(Icons.confirmation_number_sharp),
              onTap: () => Navigator.of(context).push(new MaterialPageRoute(
                builder: (BuildContext context) => LoginScreen(),
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
      body: new GridView.count(
        crossAxisCount: 2, //numero de columas de la primera pagina pruebn con 1
        mainAxisSpacing: 0.1, //espacio entre card
        childAspectRatio: 0.700, //espacio largo de cada card
        children: listamos,
      ),
    );
  }
}

//creamos el metodo detalle
//este se usa cuando pulsamos para ver segunda pantalla la descripcion del ejercicio
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
          new IniciarIcon(),
          new Informacion(
            deporte: deporte,
          ),
        ],
      ),
    );
  }
}

class IniciarNombre extends StatelessWidget {
  IniciarNombre({this.nombre});
  final String nombre;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: new EdgeInsets.all(10.0),
      child: new Row(
        children: <Widget>[
          new Expanded(
            child: new Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                new Text(
                  nombre,
                  style: new TextStyle(fontSize: 20.0, color: Colors.blue),
                ),
                new Text(
                  "$nombre\@gmail.com",
                  style: new TextStyle(fontSize: 15.0, color: Colors.blueGrey),
                ),
              ],
            ),
          ),
          new Row(
            children: <Widget>[
              new Icon(
                //icono que agrega estrellas calificacion
                Icons.star,
                size: 30.0,
                color: Colors.red,
              ),
              new Icon(
                Icons.star,
                size: 30.0,
                color: Colors.orange,
              ),
              new Icon(
                Icons.star,
                size: 30.0,
                color: Colors.purple,
              ),
              new Text(
                "12",
                style: new TextStyle(fontSize: 18.0),
              )
            ],
          )
        ],
      ),
    );
  }
}

class IniciarIcon extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: new EdgeInsets.all(10.0),
      child: new Row(
        children: <Widget>[
          new IconTec(icon: Icons.call, tec: "Llamar"),
          new IconTec(icon: Icons.message, tec: "Mensaje"),
          new IconTec(icon: Icons.photo, tec: "Foto"),
        ],
      ),
    );
  }
}

class IconTec extends StatelessWidget {
  IconTec({this.icon, this.tec});
  final IconData icon;
  final String tec;
  @override
  Widget build(BuildContext context) {
    return new Expanded(
      child: new Column(
        children: <Widget>[
          new Icon(
            icon,
            size: 50.0,
            color: Colors.blue,
          ),
          new Text(
            tec,
            style: new TextStyle(fontSize: 12.0, color: Colors.blue),
          )
        ],
      ),
    );
  }
}

class Informacion extends StatelessWidget {
  Informacion({this.deporte});
  final String deporte;
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 500,
      padding: new EdgeInsets.all(10.0),
      child: new Card(
        child: new Padding(
          padding: const EdgeInsets.all(10.0),
          child: new Text(
            deporte,
            style: new TextStyle(fontSize: 16.0, color: Colors.blue),
          ),
        ),
      ),
    );
  }
}
