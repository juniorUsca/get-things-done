import 'package:flutter/material.dart';
import 'package:getthingsdone/Views/Welcome.dart';

import 'Views/Login.dart';
import 'Views/SplashPage.dart';

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
        goToPage: WelcomePage(),
      ),
      routes: {
        '/welcome': (context) => WelcomePage(),
        '/login': (context) => LoginScreen(),
      },
    );
  }
}
