import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewChildren, inject } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { TodoService } from '../core/services/todo.service';
import { TestService } from '../core/services/test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
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

  constructor(private todoService: TodoService, private testService: TestService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.todoService.todoChanged.subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos;
      }
    })
  }
  // jest tez inny sposob na importowanie serwisu, wdrozone od Angular 14 funkcja inject()
  // todoService = inject(TodoService)

  addTodo(todo: string): void {
    if (todo.length <= 3) {
      this.errorMessage = 'Todo name must be longer than 3 characters';
      return;
    }
    this.todoService.addTodo(todo);
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }

  deleteTodo(i : number) {
    this.todoService.deleteTodo(i);
  }



  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
  }

}
