import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CrearFondo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final fondo = Container(
      height: size.height * 1,
      width: double.infinity,
      decoration: BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment(-1.0, -1.0),
              end: Alignment(2.0, 3.0),
              colors: <Color>[Colors.green, Colors.lightBlue])),
    );
    final circulo = Container(
      width: 100.0,
      height: 100.0,
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(100.0),
          color: Color.fromRGBO(255, 255, 255, 0.3)),
    );
    return Stack(
      children: <Widget>[
        fondo,
        Positioned(top: 90.0, left: 30.0, child: circulo),
        Positioned(top: -10.0, right: -20.0, child: circulo),
        Positioned(top: 170.0, right: 75.0, child: circulo),
        Positioned(top: 260.0, left: -50.0, child: circulo),
        Positioned(top: 400.0, right: 0.0, child: circulo),
        Positioned(top: 500.0, left: 10.0, child: circulo),
        Positioned(top: 630.0, left: 170.0, child: circulo),
        Positioned(top: 700.0, left: -20.0, child: circulo),
        Positioned(top: 750.0, right: -20.0, child: circulo),
        Container(
          padding: EdgeInsets.only(top: 80.0),
          child: Column(
            children: <Widget>[
              SvgPicture.asset(
                "assets/icons/gethings.svg",
                height: 50,
                width: 50,
              ),
              SizedBox(height: 30.0, width: double.infinity),
              Text('¡Bienvenido!',
                  style: TextStyle(
                      color: Colors.white,
                      fontSize: 25.0,
                      fontWeight: FontWeight.bold))
            ],
          ),
        )
      ],
    );
  }
}
