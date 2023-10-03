import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>not-found works!</p> `,
  styles: [],
})
export default class NotFoundComponent {}
