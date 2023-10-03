import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'ndb-layout',
  template: `
    <h1>None Dashboard</h1>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
  styles: [``],
})
export default class NoneDashboardLayoutComponent {}
