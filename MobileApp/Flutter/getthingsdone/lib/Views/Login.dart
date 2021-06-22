import 'package:flutter/material.dart';
import 'package:flutter_login/flutter_login.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:getthingsdone/provider/google_sign_in.dart';
import 'package:provider/provider.dart';

const users = const {
  'dribbble@gmail.com': '12345',
  'hunter@gmail.com': 'hunter',
};

class LoginScreen extends StatelessWidget {
  Duration get loginTime => Duration(milliseconds: 2250);

  Future<String> _authUser(LoginData data) {
    print('Name: ${data.name}, Password: ${data.password}');
    return Future.delayed(loginTime).then((_) {
      if (!users.containsKey(data.name)) {
        return 'User not exists';
      }
      if (users[data.name] != data.password) {
        return 'Password does not match';
      }
      return "null";
    });
  }

  Future<String> _recoverPassword(String name) {
    print('Name: $name');
    return Future.delayed(loginTime).then((_) {
      if (!users.containsKey(name)) {
        return 'User not exists';
      }
      return "null";
    });
  }

  @override
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
            print('start facebook sign in');
            await Future.delayed(loginTime);
            print('stop facebook sign in');
            return null;
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
  }
}
