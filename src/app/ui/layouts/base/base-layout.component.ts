import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>Nav</nav>
    <div class="d-flex">
      <div>SideNav</div>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [``],
})
export default class BaseLayoutComponent {}
