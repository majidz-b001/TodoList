export class Todo {
  constructor(title: string, isDone: boolean) {
    this.Title = title;
    this.IsDone = isDone;
  }

  Title: string;
  IsDone: boolean;
}
