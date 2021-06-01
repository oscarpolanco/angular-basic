import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  template: `
    <p>
      account-detail works!
    </p>
    <p>Account ID: {{ id }}</p>
    <ul>
      <li><a [routerLink]="['/account', 1]">Account 1</a></li>
      <li><a [routerLink]="['/account', 2]">Account 2</a></li>
      <li><a [routerLink]="['/account', 3]">Account 3</a></li>
    </ul>
  `,
  styles: [
  ]
})
export class AccountDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { 
    this.id = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +(params.get('id') || '');
    });
  }

}
