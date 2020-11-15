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

  insertTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  DeleteTodo(todoIndex: number): void {
    this.todos.splice(todoIndex, 1);
  }
}
