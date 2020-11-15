import {AfterViewInit, Component} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from '../Models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private todoService: TodoService) {
  }

  todos: Todo[] = [];

  ngAfterViewInit(): void {
    this.todos = this.todoService.getTodos();
  }

  InsertTodo(title: string): void {
    this.todos = this.todoService.insertTodo(new Todo(title, false));
  }

  DeleteTodo(todoIndex: number): void {
    this.todos = this.todoService.DeleteTodo(todoIndex);
  }
}

