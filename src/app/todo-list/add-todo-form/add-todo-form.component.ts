import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
  @Output() addTodo = new EventEmitter<string>();
  @ViewChild('name') todoForm!: NgModel;

  // person = {
  //   name: 'test',
  //   surname: 'testowy',
  //   role: 'father'
  // }
  
  todoName = '';
  
  addNewTodo(form: NgForm) {
    // console.log(this.todoName);
    // console.log(this.person)
    console.log(form);
    this.addTodo.emit(this.todoName);
  }
}


