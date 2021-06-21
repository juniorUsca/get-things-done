import 'package:flutter/material.dart';

class SplashPage extends StatelessWidget {
  int duration = 0;
  Widget goToPage;
  SplashPage({required this.goToPage, required this.duration});
  @override
  Widget build(BuildContext context) {
    Future.delayed(Duration(seconds: this.duration), () {
      Navigator.push(
          context, MaterialPageRoute(builder: (context) => this.goToPage));
    });
    return Scaffold(
      body: Container(
        color: Colors.blue,
        child: Center(
          child: Container(
              width: 240,
              height: 240,
              child: Image.asset('assets/images/logo.png')),
        ),
      ),
    );
  }
}
