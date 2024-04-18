import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p class="text-center">
      &copy; Prawa zastrzezone xd
    </p>
  `,
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent {

}
