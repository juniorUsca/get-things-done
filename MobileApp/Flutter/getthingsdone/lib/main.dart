import 'package:flutter/material.dart';
import 'package:getthingsdone/Views/SigIn.dart';
import 'package:getthingsdone/Views/Welcome.dart';
import 'package:getthingsdone/provider/google_sign_in.dart';
import 'package:provider/provider.dart';
import 'Views/Login.dart';
import 'Views/SplashPage.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) => ChangeNotifierProvider(
        create: (context) => GoogleSignInProvider(),
        child: MaterialApp(
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
            '/sigin': (context) => SigIn(),
          },
        ),
      );
}
