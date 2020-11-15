import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
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
  @ViewChild('txtTitle') txtTitle: ElementRef;
  @ViewChild('inputBack') inputBack: ElementRef;

  ngAfterViewInit(): void {
    this.todos = this.todoService.getTodos();
  }

  InsertTodo(): void {
    if (this.txtTitle.nativeElement.value === '') {
      this.showError();
      return;
    }
    this.todos = this.todoService.insertTodo(new Todo(this.txtTitle.nativeElement.value, false));
    this.txtTitle.nativeElement.value = '';
    this.hideError();
  }

  DeleteTodo(todoIndex: number): void {
    this.todos = this.todoService.deleteTodo(todoIndex);
  }

  TodoIsDone(todoIndex: number): void {
    this.todos = this.todoService.setToDone(todoIndex);
  }

  showError(): void {
    this.txtTitle.nativeElement.placeholder = 'You Must Fill Title ❌';
  }

  hideError(): void {
    this.txtTitle.nativeElement.placeholder = 'What will you do today?';
  }
}

