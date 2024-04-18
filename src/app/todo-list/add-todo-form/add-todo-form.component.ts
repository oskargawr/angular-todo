import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent implements AfterViewInit{
  @Output() addTodo = new EventEmitter<string>();
  @ViewChild('name') todoForm!: NgModel;
  
  todoName = '';
  
  addNewTodo(form: NgForm) {
    // console.log(this.todoName);
    console.log(form);
    
    this.addTodo.emit(this.todoName);
  }

  ngAfterViewInit(): void {
    console.log(this.todoForm);
  }
}


