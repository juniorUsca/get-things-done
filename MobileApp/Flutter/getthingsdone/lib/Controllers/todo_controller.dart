import 'package:getthingsdone/Models/todo.dart';
import 'package:getthingsdone/repository/repository.dart';

class TodoController {
  final Repository _repository;
  TodoController(this._repository);
  // get
  Future<List<Todo>> fetchTodoList() async {
    return _repository.getTodoList();
  }
}
