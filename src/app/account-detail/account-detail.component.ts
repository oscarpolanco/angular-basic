import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  template: `
    <p>
      account-detail works!
    </p>
    <p>Account ID: {{ id }}</p>
  `,
  styles: [
  ]
})
export class AccountDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { 
    this.id = +(this.route.snapshot.paramMap.get('id') || '');
  }

  ngOnInit(): void {
  }

}
