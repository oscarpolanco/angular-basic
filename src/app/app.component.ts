import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/account">Account</a></li>
      </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
