import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { TodoService } from '../core/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo | undefined;
  id!: number;
  
  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
    ) {}
    
    ngOnInit(): void {
      // this.id = +this.route.snapshot.params['id'];
      // this.todo = this.todoService.getTodo(this.id);

      this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.todo = this.todoService.getTodo(this.id);
      })
    }

    navigateToNextTodo() {
      this.router.navigate(['/todo', this.id + 1]);
    }
}
