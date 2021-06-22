import 'dart:math';
import 'package:flutter/material.dart';

class Background extends StatelessWidget {
  final boxDecoration = BoxDecoration(
      gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          stops: [0.8, 2],
          colors: [Color(0xffFFFF), Color(0xffFFF)]));

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          decoration: boxDecoration,
        ),
        Positioned(top: -150, left: -30, child: Card1()),
        Positioned(bottom: -110, left: -50, child: Card2()),
        Positioned(bottom: 150, right: -10, child: Card3()),
        Container(
          padding: EdgeInsets.only(top:80.0),
        )
      ],
    );
  }
}

class Card1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: -pi / 5,
      child: Container(
        width: 360,
        height: 360,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(80),
            gradient: LinearGradient(colors: [
              Color(0xffC3FFB3),
              Colors.green
            ])),
      ),
    );
  }
}

class Card2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: -pi / 3,
      child: Container(
        width: 100,
        height: 300,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(80),
            gradient: LinearGradient(colors: [
              Color(0xffC3FFB3),
              Colors.green
            ])),
      ),
    );
  }
}

class Card3 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: -pi / 4,
      child: Container(
        width: 200,
        height: 200,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(80),
            gradient: LinearGradient(colors: [
              Color(0xffC3FFB3),
              Colors.green
            ])),
      ),
    );
  }
}