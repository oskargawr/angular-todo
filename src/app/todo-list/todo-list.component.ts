import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { TodoService } from '../core/services/todo.service';
import { Subscription } from 'rxjs';
import { TodoApiService } from '../core/services/todo-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})

// implements AfterViewInit, AfterViewChecked
export class TodoListComponent implements OnInit, OnDestroy {
  @Input() test!: string;
  // @ViewChild(TodoComponent) todoComp!: TodoComponent;
  // @ViewChildren(TodoComponent) todoComps!: TodoComponent;
  todos: Todo[] = this.todoService.todos;
  errorMessage = ''; // typescript sam sie domysla jaki typ ma zmienna na podstawie przypisanej wartosci
  // testSwitchCase = "tak";
  sub!: Subscription;

  // ngAfterViewInit(): void {
  //   console.log(this.todoComp);
  // }

  // ngAfterViewChecked(): void {
  //   console.log(this.todoComp);
  // }

  constructor(
    private todoService: TodoService,
    private todoApiService: TodoApiService
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.todoService.todoChanged.subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
      },
    });

    if (this.todos.length === 0) {
      this.todoApiService.getTodos().subscribe({
        error: (err) => {
          this.errorMessage =
            'Wystapil blad podczas pobierania danych z serwera';
        },
      });
    }
  }
  // jest tez inny sposob na importowanie serwisu, wdrozone od Angular 14 funkcja inject()
  // todoService = inject(TodoService)

  addTodo(todo: string): void {
    this.todoApiService.postTodo({ name: todo, isComplete: false }).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        this.errorMessage = 'Wystapil blad podczas pobierania danych z serwera';
      },
    });
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
  }
}
