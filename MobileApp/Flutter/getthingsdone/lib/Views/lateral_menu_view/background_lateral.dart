import 'package:flutter/material.dart';
Widget crearFondo(BuildContext context) {
    final fondo = Container(
      height: double.infinity,
      width: double.infinity,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment(-1.0, -1.0),
          end: Alignment(2.0, 3.0),
          colors: <Color> [
            Colors.green,
            Color(0xffA1FF91)
          ]
        )
      ),
    );

    return Stack(
      children: <Widget>[
        fondo    
      ],
    );
}