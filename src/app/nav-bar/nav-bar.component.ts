import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav>
      <ul>
        <li>
          <a class="nav-link" [routerLink]="['/system', 1]" routerLinkActive="active">🔥 Combustion</a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['/system', 2]" routerLinkActive="active">🥛 Container</a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['/system', 3]" routerLinkActive="active">🧵 Cordage</a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['/system', 4]" routerLinkActive="active">⛺️ Cover</a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['/system', 5]" routerLinkActive="active">🔪 Cutting</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        font-size: 18px;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
    
      ul :not(:last-child) {
        margin-right: 5px;
      }
    
      li {
        float: left;
      }
      
      .nav-link {
        display: block;
        text-align: center;
        padding: 10px;
        text-decoration: none;
        color: black;
      }
      
      .nav-link:hover {
        background-color: darkgreen;
        color: white;
        transition: 0.2s ease-in-out;
      }
      
      .active {
        background-color: darkgreen;
        color: white;
      }
    `
  ]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
