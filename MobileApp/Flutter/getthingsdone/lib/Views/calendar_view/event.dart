import 'package:flutter/foundation.dart';

class Event {
  final String title;
  final String description;
  Event({@required this.title, this.description});

  String toString() => this.title;
}