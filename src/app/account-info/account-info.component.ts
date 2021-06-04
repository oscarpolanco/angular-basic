import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-info',
  template: `
    <p>
      This is the information of the account {{ id }}
    </p>
  `,
  styles: [
  ]
})
export class AccountInfoComponent implements OnInit {
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = (+ (params.get('id') || ''));
    })
  }
}
