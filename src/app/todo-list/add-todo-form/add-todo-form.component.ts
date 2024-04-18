import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
  @Output() addTodo = new EventEmitter<string>();

  todoName = '';

  addNewTodo(form: NgForm) {
    // console.log(this.todoName);
    console.log(form);
    
    this.addTodo.emit(this.todoName);
  }
}


