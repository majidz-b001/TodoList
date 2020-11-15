import {Injectable} from '@angular/core';
import {Todo} from '../Models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() {
    if (this.todos.length < 1) {
      this.todos.push(new Todo('Default Task .', false));
    }
  }

  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  insertTodo(todo: Todo): Todo[] {
    this.todos.push(todo);
    return this.todos;
  }

  setToDone(todoIndex: number): Todo[] {
    this.todos[todoIndex].IsDone = true;
    return this.todos;
  }

  deleteTodo(todoIndex: number): Todo[] {
    this.todos.splice(todoIndex, 1);
    return this.todos;
  }
}
