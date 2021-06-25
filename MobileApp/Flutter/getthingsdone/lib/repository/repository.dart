import 'package:getthingsdone/Models/todo.dart';

abstract class Repository {
  Future<List<Todo>> getTodoList();
}
