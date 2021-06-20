import 'package:flutter/material.dart';

import 'Views/Login.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: SplashPage(
        duration: 3,
        goToPage: LoginScreen(),
      ),
    );
  }
}

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
        color: Color(0xFF08C038),
        child: Center(
          child: Container(
              width: 150,
              height: 150,
              child: Image.asset('assets/images/logo.png')),
        ),
      ),
    );
  }
}

class WelcomePage extends StatelessWidget {
  const WelcomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Text("hola"),
    );
  }
}
