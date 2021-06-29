import 'package:flutter/material.dart';
import 'package:getthingsdone/Views/login_view/Login.dart';
import 'package:getthingsdone/Views/login_view/SigIn.dart';
import 'package:getthingsdone/Views/home_view/home_page.dart';

import 'bloc/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Provider(
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Flutter Google Maps',
        initialRoute: 'login_page',
        routes: {
          'signin_page': (BuildContext context) => SignInPage(),
          'login_page': (BuildContext context) => LoginPage(),
          'principal': (BuildContext context) => HomePage(),
          //se le pueden agregar más rutas a navegar
        },
        theme: ThemeData(primaryColor: Color(0xffFFB001)),
      ),
    );
  }
}
