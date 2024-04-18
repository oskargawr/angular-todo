import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, OnInit, OnDestroy, } from '@angular/core';
import { Subject, Subscription, filter, from, fromEvent, interval, map, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

// implements AfterContentInit, AfterContentChecked
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  sub: Subscription = new Subscription();
  // @ContentChild('modalDiv') modalDiv!: ElementRef;
  // @ContentChild('check') checkBox!: ElementRef;
  
  // ngAfterContentInit(): void {
    //   console.log(this.modalDiv);
    // }
    
    // ngAfterContentChecked(): void {
      //   // console.log("ngAfterContentChecked");
      //   console.log(this.checkBox.nativeElement.checked);
      // }
      
      
  onClose() {
    this.close.emit();
  }

  ngOnInit(): void {
    // this.sub = of(1).subscribe({
    //   next: value => console.log(value),
    //   error: error => console.log(error),
    //   complete: () => console.log('complete')
    // })
    // this.sub = from([1, 2, 3]).subscribe({
    //   next: value => console.log(value),
    //   error: error => console.log(error),
    //   complete: () => console.log('complete')
    // })
    // this.sub = fromEvent(document, 'click').subscribe({
    //   next: value => console.log(value),
    //   error: error => console.log(error),
    //   complete: () => console.log('complete')
    // })
    // of(1, 2, 3).pipe(map(value => value * 2)).subscribe({
    //   next: value => console.log(value)
    // })
    // of(1, 2, 3).pipe(filter(value => value % 2 === 0),
    // map(value => value * 2)
    // ).subscribe({
    //   next: value => console.log(value)
    // })
    // of(1).pipe(
    //   switchMap(numb => of(numb * 2)),
    // )
    // this.sub = interval(1000).pipe(take(5)).subscribe({ // wez 5 pierwszych wyemitowanych wartosci, a potem zakoncz subskrypcje
    //   next: number => console.log(number)
    // })
    // console.log('sub', this.sub);
    // const subject = new Subject<number>();
    // this.sub.add(subject.subscribe({
    //   next: value => console.log(value)
    // }));

    // subject.next(5);
    // console.log(this.sub);
    const promise = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hello');
      }, 1000);
    });

    const obs$ = from(promise());
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    console.log('destroy', this.sub);
  }
      
}
