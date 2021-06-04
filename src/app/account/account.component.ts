import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `
    <p>
      account works!
    </p>
    <ul>
      <li><a [routerLink]="['/home/account', 1]">Account 1</a></li>
      <li><a [routerLink]="['/home/account', 2]">Account 2</a></li>
      <li><a [routerLink]="['/home/account', 3]">Account 3</a></li>
    </ul>
  `,
  styles: [
  ]
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
