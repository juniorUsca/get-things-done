import 'package:flutter/material.dart';
import 'background_page.dart';
import 'package:flutter_login/flutter_login.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:getthingsdone/provider/google_sign_in.dart';
import 'package:provider/provider.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool hidePassword = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(
      children: <Widget>[CrearFondo(), _loginForm(context)],
    ));
  }

  Widget _loginForm(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return SingleChildScrollView(
      child: Column(
        children: <Widget>[
          SafeArea(
            child: Container(
              height: 190.0,
            ),
          ),
          Container(
            width: size.width * 0.85,
            margin: EdgeInsets.symmetric(vertical: 30.0),
            padding: EdgeInsets.symmetric(vertical: 50.0),
            decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(5.0),
                boxShadow: <BoxShadow>[
                  BoxShadow(
                      color: Colors.black26,
                      blurRadius: 3.0,
                      offset: Offset(0.0, 5.0),
                      spreadRadius: 3.0)
                ]),
            child: Column(
              children: <Widget>[
                Text('Iniciar Sesión',
                    style: TextStyle(
                        fontSize: 20.0,
                        color: Colors.indigoAccent,
                        fontWeight: FontWeight.bold)),
                SizedBox(height: 20.0),
                _crearEmail(),
                SizedBox(height: 30.0),
                _crearPassword(),
                SizedBox(height: 30.0),
                _crearBoton()
              ],
            ),
          ),
          TextButton(
              child: Text('Crear una nueva cuenta', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),),
              onPressed: () =>
                  print('IR A REGISTRO')),
          SizedBox(height: 100.0)
        ],
      ),
    );
  }

  Widget _crearEmail() {
    return StreamBuilder(
      builder: (BuildContext context, AsyncSnapshot snapshot) {
        return Container(
          padding: EdgeInsets.symmetric(horizontal: 20.0),
          child: TextField(
            keyboardType: TextInputType.emailAddress,
            decoration: InputDecoration(
                icon: Icon(Icons.mail_outline, color: Colors.lightBlueAccent),
                hintText: 'ejemplo@correo.com',
                labelText: 'Correo electrónico'),
          ),
        );
      },
    );
  }

  Widget _crearPassword() {
    return StreamBuilder(
      builder: (BuildContext context, AsyncSnapshot snapshot) {
        return Container(
          padding: EdgeInsets.symmetric(horizontal: 20.0),
          child: TextField(
            obscureText: hidePassword,
            decoration: InputDecoration(
              icon: Icon(Icons.lock_outline, color: Colors.lightBlueAccent),
              labelText: 'Contraseña',
              suffixIcon: IconButton(
                onPressed: () {
                  setState(() {
                    hidePassword = !hidePassword;
                  });
                },
                icon: Icon(
                    hidePassword ? Icons.visibility_off : Icons.visibility),
              ),
            ),
          ),
        );
      },
    );
  }
    Widget _crearBoton() {
    return StreamBuilder(
      builder: (BuildContext context, AsyncSnapshot snapshot) {
        return RaisedButton(
            child: Container(
              padding: EdgeInsets.symmetric(horizontal: 80.0, vertical: 15.0),
              child: Text('Ingresar'),
            ),
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(5.0)),
            elevation: 0.0,
            color: Colors.lightBlue,
            textColor: Colors.white,
            onPressed: (){});
      },
   /*    @override
  Widget build(BuildContext context) {
    return FlutterLogin(
      title: 'GetThingsDone',
      logo: 'assets/images/logo.png',
      onLogin: _authUser,
      onSignup: _authUser,
      loginProviders: <LoginProvider>[
        LoginProvider(
          icon: FontAwesomeIcons.google,
          callback: () async {
            final provider =
                Provider.of<GoogleSignInProvider>(context, listen: false);
            provider.googleLogin();
          },
        ),
        LoginProvider(
          icon: FontAwesomeIcons.facebookF,
          callback: () async {
            print('start facebook sign in');
            await Future.delayed(loginTime);
            print('stop facebook sign in');
            return null;
          },
        ),
        LoginProvider(
          icon: FontAwesomeIcons.linkedinIn,
          callback: () async {
            print('start linkdin sign in');
            await Future.delayed(loginTime);
            print('stop linkdin sign in');
            return null;
          },
        ),
        LoginProvider(
          icon: FontAwesomeIcons.githubAlt,
          callback: () async {
            print('start github sign in');
            await Future.delayed(loginTime);
            print('stop github sign in');
            return null;
          },
        ),
      ],
      onRecoverPassword: _recoverPassword,
    );
  } */
}