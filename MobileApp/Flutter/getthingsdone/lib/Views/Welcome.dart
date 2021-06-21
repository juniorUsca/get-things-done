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
                      child: ElevatedButton(
                    child: Text('Ir al login'),
                    onPressed: () {
                      Navigator.pushNamed(context, '/login');
                    },
                  )),
                  Center(child: ThemeButton(
                    onClick: () async {
                      Navigator.pushNamed(context, '/sigin');
                      // bool success = await loginService.signInWithGoogle();

                      // if (success) {
                      //   Navigator.pushNamed(context, '/sigin');
                      // }
                    },
                  ))
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
