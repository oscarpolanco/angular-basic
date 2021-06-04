import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <nav>
    <ul>
      <li><a routerLink="/home">Home</a></li>
      <li><a routerLink="/home/account">Account</a></li>
      <li><a routerLink="/home/habits">Habits</a></li>
    </ul>
  </nav>
    <p>
      home works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
