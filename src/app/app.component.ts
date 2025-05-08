import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <div class="bg-red-100">Welcome to {{title}}!</div>

    <router-outlet />
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pos-frontend';
}
