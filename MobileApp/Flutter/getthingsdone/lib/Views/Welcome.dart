import 'package:flutter/material.dart';
import 'package:getthingsdone/helpers/Appcolors.dart';
import 'package:getthingsdone/widgets/themebutton.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        color: AppColors.MAIN_COLOR,
        child: Stack(
          children: [
            Positioned.fill(
              child: Opacity(
                opacity: 0.3,
                child: Image.asset('assets/images/logo.png', fit: BoxFit.cover),
              ),
            ),
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Center(
                    child: ClipOval(
                      child: Container(
                        width: 180,
                        height: 180,
                        color: AppColors.MAIN_COLOR,
                        alignment: Alignment.center,
                        child: Image.asset('assets/images/logo.png'),
                      ),
                    ),
                  ),
                  SizedBox(height: 50),
                  Text('Bienvenido/a',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 40,
                          fontWeight: FontWeight.bold)),
                  SizedBox(height: 50),
                  ThemeButton(
                    label: "Hacer Login",
                    labelColor: Colors.white,
                    color: Colors.transparent,
                    highlight: AppColors.MAIN_COLOR.withOpacity(0.5),
                    borderColor: AppColors.MAIN_COLOR,
                    borderWidth: 4,
                    onClick: () async {
                      Navigator.pushNamed(context, '/login');
                      // bool success = await loginService.signInWithGoogle();

                      // if (success) {
                      //   Navigator.pushNamed(context, '/sigin');
                      // }
                    },
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
