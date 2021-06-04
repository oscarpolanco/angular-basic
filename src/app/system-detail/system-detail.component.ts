import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { System } from '../system';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-system-detail',
  template: `
    <h2>{{ system.name }}</h2>
    <p>{{ system.description }}</p>
    <ul>
      <li>
        <a class="nav-link"
        routerLinkActive="active"
        routerLink="info">Info</a>
      </li>
      <li>
        <a class="nav-link"
        routerLinkActive="active"
        routerLink="items">Items</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
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
        margin-right: 3px;
      }
      
      li {
        float: left;
      }
      
      .nav-link {
        display: block;
        text-align: center;
        padding: 7px;
        font-size: 16px;
        text-decoration: none;
        color: black;
      }
      
      .nav-link:hover {
        background-color: saddlebrown;
        color: white;
        transition: 0.2s ease-in-out;
      }
      
      .active {
        background-color: saddlebrown;
        color: white;
      }
    `
  ]
})
export class SystemDetailComponent implements OnInit {
  system: System;
  id: any;

  constructor(private systemService: SystemService, private route: ActivatedRoute) {
    this.system = {
      id: 0,
      name: '',
      description: '',
      info: '',
      items: []
    }
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.id = +(params.get('id') || '');
          return this.systemService.getSystemDetail(this.id);
        })
      )
      .subscribe((data) => {
        this.system = data;
      });
  }

}
