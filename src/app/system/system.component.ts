import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  template: `
    <div class="container">
      <h1>Welcome to Camping Planner 🏕</h1>
      <app-nav-bar></app-nav-bar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .container {
        margin: 0 auto;
        max-width: 800px;
      }
      
      h1 {
        color: rgb(47, 61, 49);
      }
    `
  ]
})
export class SystemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
