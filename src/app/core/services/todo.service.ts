import { Injectable } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')!) : [];

  todoChanged = new Subject<Todo[]>();


  constructor() { }

  public get todos() {
    return this._todos.slice(); // zwracanie kopii zamiast referencji
  }

  getTodo(index: number): Todo {
    return this.todos[index];
  }

  addTodo(name: string): void {
    this._todos.push({name, isComplete: false});
    this.saveToLocalStorage();

    this.todoChanged.next(this.todos);
  }

  saveToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(index: number): void {
    this._todos = this.todos.filter((todo, i) => i !== index);
    this.saveToLocalStorage();
    this.todoChanged.next(this.todos);
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this.todos[index],
      isComplete: !this.todos[index].isComplete
    }
    this.saveToLocalStorage();
    this.todoChanged.next(this.todos);
  }
}
