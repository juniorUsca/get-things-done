import 'package:flutter/material.dart';
import 'background.dart';


class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(),
      appBar: AppBar(
        title: Text('Tareas', style: TextStyle(color: Colors.green)),
        backgroundColor: Colors.white,
        elevation: 3.0,
        iconTheme: IconThemeData(color: Colors.green),
        actions: [IconButton(
            color: Colors.green,
            icon: Icon(Icons.add),
            onPressed: () {}
          )
        ],
      ),
      body: Stack(
        children: [
          Background(),
          Container(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Padding(
                  padding: const EdgeInsets.only(top: 10, bottom: 10),
                  child: Text('Mis tareas',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                          color: Color(0xFF0D253F),
                          fontSize: 20.0,
                          fontWeight: FontWeight.w700,
                          letterSpacing: 1.2)),
                ),
                Expanded(
                    child: ListView.builder(
                        itemCount: 1,
                        itemBuilder: (context, index) {
                          return Column(
                            children: [
                              buildCard(
                                  text: 'Tarea1',
                                  subtitle:
                                      'Esta es la primera tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'pan'),
                              buildCard(
                                  text: 'Tarea2',
                                  subtitle:
                                      'Esta es la segunda tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'puente'),
                              buildCard(
                                  text: 'Tarea3',
                                  subtitle:
                                      'Esta es la tercera tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'luna'),
                              buildCard(
                                  text: 'Tarea4',
                                  subtitle:
                                      'Esta es la cuarta tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'mar'),
                              buildCard(
                                  text: 'Tarea5',
                                  subtitle:
                                      'Esta es la quimta tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'catarata'),
                              buildCard(
                                  text: 'Tarea6',
                                  subtitle:
                                      'Esta es la sexta tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'montana'),
                              buildCard(
                                  text: 'Tarea7',
                                  subtitle:
                                      'Esta es la septima tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'vista'),
                              buildCard(
                                  text: 'Tarea8',
                                  subtitle:
                                      'Esta es la octava tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'mirador'),
                              buildCard(
                                  text: 'Tarea9',
                                  subtitle:
                                      'Esta es la novena tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'bosque'),
                              buildCard(
                                  text: 'Tarea10',
                                  subtitle:
                                      'Esta es la decima tarea que se va a crear en nuestra vista como se puede ver hay muchas otras tareas como esta.',
                                  url: 'castillo'),
                            ],
                          );
                        }))
              ],
            ),
          ),
        ],
      ),
    );
  }

  Card buildCard({String text, String subtitle, String url}) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
      margin: EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
      child: Column(
        children: [
          Container(
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30.0),
                  color: Colors.white,
                  boxShadow: <BoxShadow>[
                    BoxShadow(
                        color: Colors.black26,
                        blurRadius: 10.0,
                        spreadRadius: 2.0,
                        offset: Offset(2.0, 5.0))
                  ]),
              margin: EdgeInsets.all(0.5),
              height: 150,
              child: Stack(
                children: [
                  Positioned.fill(
                      child: ClipRRect(
                          borderRadius: BorderRadius.circular(20.0),
                          child: Image(
                            image: AssetImage('assets/images/$url.jpg'),
                            fit: BoxFit.cover,
                          ))),
                  Positioned(
                    bottom: 0,
                    left: 0,
                    right: 0,
                    child: Container(
                      height: 120,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.only(
                              bottomLeft: Radius.circular(20),
                              bottomRight: Radius.circular(20)),
                          gradient: LinearGradient(
                              begin: Alignment.bottomCenter,
                              end: Alignment.topCenter,
                              colors: [
                                Colors.black.withOpacity(0.7),
                                Colors.transparent
                              ])),
                    ),
                  ),
                  Positioned(
                    top: 0,
                    right: 0,
                    child: Padding(
                      padding: const EdgeInsets.all(4.0),
                      child: Row(
                        children: [
                          ClipOval(
                              child: Container(
                            color: Colors.green,
                            padding: EdgeInsets.all(5.0),
                            child:
                                Icon(Icons.edit, color: Colors.white, size: 30),
                          )),
                        ],
                      ),
                    ),
                  ),
                ],
              )),
          ListTile(
            title: Text(text,
                style: TextStyle(
                  fontSize: 16.0,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.8
                )),
            subtitle: Text(
              subtitle,
              textAlign: TextAlign.justify,
            ),
          ),
          ButtonBar(
            alignment: MainAxisAlignment.end,
            children: [
              TextButton.icon(
                onPressed: () {},
                label: const Text(''),
                icon: Icon(Icons.favorite_outline, color: Colors.green),
              ),
              TextButton.icon(
                onPressed: () {},
                icon: Icon(Icons.settings, color: Colors.green),
                label: Text(''),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
