import 'package:flutter/material.dart';
import 'package:getthingsdone/Views/calendar_view/calendario_page.dart';
import 'package:getthingsdone/Views/lateral_menu_view/background_lateral.dart';

class LateraPage extends StatefulWidget {
  @override
  _LateraPageState createState() => _LateraPageState();
}

class _LateraPageState extends State<LateraPage> {
  @override
  Widget build(BuildContext context) {
    final name = 'Fabrizio Atiquipa Mendoza';
    final email = 'fabrizioati123@gmail.com';
    final urlImagen =
        'https://www.semana.com/resizer/j0-vmg1Lq8iUt4qCWu6Aj3QUutw=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/SMRIIBXEONCRDPXLAOVVTRHAVI.jpg';
    return Drawer(
      child: Material(
        color: Colors.green,
        child: Stack(
          children: [
            crearFondo(context),
            ListView(
              padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
              children: [
                _menuHeader(
                  urlImagen: urlImagen,
                  name: name,
                  email: email,
                ),
                Container(
                  padding: EdgeInsets.symmetric(horizontal: 1, vertical: 10),
                  child: Column(
                    children: [
                      SizedBox(height: 15),
                      _menuItem(
                          text: 'Calendario',
                          icon: Icons.calendar_today,
                          onClicked: () => selectedItem(context, 0)),
                      SizedBox(height: 15),
                      _menuItem(text: 'Favorites', icon: Icons.favorite_border),
                      SizedBox(height: 15),
                      _menuItem(
                          text: 'Workflow', icon: Icons.workspaces_outline),
                      SizedBox(height: 15),
                      _menuItem(text: 'Updates', icon: Icons.update_outlined),
                      SizedBox(height: 20),
                      Divider(color: Colors.white70),
                      SizedBox(height: 20),
                      _menuItem(
                          text: 'Plugins', icon: Icons.account_tree_outlined),
                      SizedBox(height: 15),
                      _menuItem(
                          text: 'Notifications',
                          icon: Icons.notifications_outlined),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _menuItem({String text, IconData icon, VoidCallback onClicked}) {
    final color = Colors.white;
    final hoverColor = Colors.white70;
    return ListTile(
      leading: Icon(icon, color: color),
      title: Text(text, style: TextStyle(color: color)),
      hoverColor: hoverColor,
      onTap: onClicked,
    );
  }

  Widget _menuHeader({String urlImagen, String name, String email}) {
    return InkWell(
      child: Container(
        padding: EdgeInsets.only(top: 50),
        child: Row(
          children: [
            CircleAvatar(
              backgroundColor: Colors.white,
              radius: 35.0,
              child: CircleAvatar(
                  maxRadius: 30, backgroundImage: NetworkImage(urlImagen)),
            ),
            SizedBox(width: 10),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  name,
                  style: TextStyle(fontSize: 15, color: Colors.white),
                ),
                SizedBox(height: 4),
                Text(
                  email,
                  style: TextStyle(fontSize: 12, color: Colors.white),
                ),
              ],
            ),
            Spacer(),
            CircleAvatar(
              maxRadius: 24,
              backgroundColor: Color(0xfff559A49),
              child: Icon(Icons.add_comment_outlined, color: Colors.white),
            )
          ],
        ),
      ),
    );
  }
}

void selectedItem(BuildContext context, int index) {
  Navigator.of(context).pop();
  switch (index) {
    case 0:
      Navigator.of(context).push(MaterialPageRoute(
        builder: (context) => Calendar(),
      ));
      break;
  }
}
