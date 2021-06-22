import 'package:flutter/material.dart';

class FormPage extends StatefulWidget {
  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  String _nombre = '';
  String _descripcion = '';
  String _fecha = '';
  String _opcionseleccionada = 'Muy Importante';
  List<String> _poderes = ['Muy Importante', 'Importante', 'Poco Importante'];

  TextEditingController _inputFielDataController = new TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: Colors.green, elevation:0),
      body: ConstrainedBox(
          constraints: BoxConstraints(maxHeight: double.infinity),
          child: Container(
            height: MediaQuery.of(context).size.height,
            width: double.infinity,
            color: Colors.green,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(child: Center(child: Image(image: AssetImage('assets/images/clipboard.png'), width:180, height:180)),margin: EdgeInsets.only(top: 0.0),),
                SizedBox(height: 10.0),
                Padding(
                    padding: EdgeInsets.only(
                        top: 0.0, bottom: 0.0, left: 20.0, right: 0.0),
                    child: Text('Nueva Tarea',
                        style: TextStyle(color: Colors.white, fontSize: 28.0,fontWeight: FontWeight.w700,
                  letterSpacing: 0.8))),
                SizedBox(height: 10.0),
                Padding(
                  padding: EdgeInsets.only(
                      top: 0.0, bottom: 0.0, left: 20.0, right: 0.0),
                  child: Text('Añada una nueva tarea en sus actividades',
                      style: TextStyle(color: Colors.white, fontSize: 14.0)),
                ),
                SizedBox(height: 10.0),
                Expanded(
                  child: SingleChildScrollView(
                    child: Container(
                        margin: EdgeInsets.only(
                            top: 20.0, bottom: 0.0, right: 0.0, left: 0.0),
                        decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.only(
                              topLeft: Radius.circular(35.0),
                              topRight: Radius.circular(100.0),
                              bottomLeft: Radius.circular(50.0),
                              bottomRight: Radius.circular(50.0),
                            )),
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            children: [
                              Container(
                                height:
                                    MediaQuery.of(context).size.height / 1.5,
                                width: MediaQuery.of(context).size.width,
                                padding: EdgeInsets.only(top: 60.0),
                                child: ListView(
                                  padding: EdgeInsets.symmetric(
                                      horizontal: 15.0, vertical: 20.0),
                                  children: <Widget>[
                                    _crearInput(),
                                    Divider(),
                                    _crearDescription(),
                                    Divider(),
                                    _crearFecha(context),
                                    Divider(),
                                    _crearDropdown(),
                                    Divider(),
                                    _crearPersona()
                                  ],
                                ),
                              )
                            ],
                          ),
                        )),
                  ),
                )
              ],
            ),
          )),
    );
  }

  Widget _crearInput() {
    return TextField(
      textCapitalization: TextCapitalization.sentences,
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(20.0),
        ),
        counter: Text('Leters ${_nombre.length}'),
        hintText: 'Nombre de la persona',
        labelText: 'Nombre',
        helperText: 'Solo el nombre',
        suffixIcon: Icon(Icons.add_alert_outlined, color: Colors.green),
        icon: Icon(Icons.description_outlined, color: Colors.green),
      ),
      onChanged: (valor) {
        setState(() {
          _nombre = valor;
        });
      },
    );
  }

  Widget _crearDescription() {
    return TextField(
      decoration: InputDecoration(
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(20.0),
        ),
        hintText: 'Descripcion',
        labelText: 'Descripcion',
        suffixIcon: Icon(Icons.wb_iridescent_rounded, color: Colors.green),
        icon: Icon(Icons.design_services_rounded, color: Colors.green),
      ),
      onChanged: (valor) {
        setState(() {
          _descripcion = valor;
        });
      },
    );
  }

  Widget _crearFecha(BuildContext context) {
    return TextField(
      enableInteractiveSelection: false,
      controller: _inputFielDataController,
      decoration: InputDecoration(
        focusColor: Colors.green,
        hoverColor: Colors.green,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(20.0),
        ),
        hintText: 'Fecha de Evento',
        labelText: 'Fecha de Evento',
        suffixIcon: Icon(Icons.alarm, color: Colors.green),
        icon: Icon(Icons.calendar_today, color: Colors.green),
      ),
      onTap: () {
        FocusScope.of(context).requestFocus(new FocusNode());
        _selecDate(context);
      },
    );
  }

  Widget _crearPersona() {
    return ListTile(
      title: Text('Nombre es: $_nombre'),
      subtitle: Text('Detalles: $_descripcion'),
      trailing: Text(_opcionseleccionada),
    );
  }

  void _selecDate(BuildContext context) async {
    DateTime piked = await showDatePicker(
        context: context,
        initialDate: new DateTime.now(),
        firstDate: new DateTime(2021),
        lastDate: new DateTime(2055));
    if (piked != null) {
      setState(() {
        _fecha = piked.toString();
        _inputFielDataController.text = _fecha;
      });
    }
  }

  List<DropdownMenuItem<String>> getOpcionesDropdown() {
    List<DropdownMenuItem<String>> lista = new List();
    _poderes.forEach((poder) {
      lista.add(DropdownMenuItem(
        child: Text(poder),
        value: poder,
      ));
    });
    return lista;
  }

  Widget _crearDropdown() {
    return Row(
      children: <Widget>[
        Icon(Icons.label_important, color: Colors.green),
        SizedBox(width: 30.0),
        Expanded(
          child: DropdownButton(
            value: _opcionseleccionada,
            items: getOpcionesDropdown(),
            onChanged: (opt) {
              setState(() {
                _opcionseleccionada = opt;
              });
            },
          ),
        )
      ],
    );
  }
}
