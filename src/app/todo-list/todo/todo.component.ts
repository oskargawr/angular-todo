import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
// implements OnChanges, DoCheck
// implements OnInit 
// implements AfterViewInit, OnDestroy
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() index!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  // @ViewChild('li') li!: ElementRef;
  openModal = false;
  timeout!: any;
  keyValueTest: {[key: string]: string | number} = {
    name: 'test',
    age: 12
  }
  
  // ngOnDestroy(): void {
  //   console.log("todo zostal usuniety")
  //   clearTimeout(this.timeout);
  // }
  constructor(private router: Router) {

  }

  // ngOnInit(): void {
  //   this.timeout = setTimeout(() => {
  //     console.log("timeout");
      
  //   }, 3000);
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }

  // ngDoCheck(): void {
  //   console.log("ngDoCheck zostal wykonany")
  //   // console.log(this.todo)
  // }

  // ngAfterViewInit(): void {
  //   console.log(this.li)
  // }

  changeTodoStatus(): void {
    this.changeStatus.emit(this.index);
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  deleteTodo(): void {
    this.delete.emit();
  }

  navigateToDetails() {
    this.router.navigate(['/todo', this.index]);
  }
}
