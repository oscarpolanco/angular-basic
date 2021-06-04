import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Item } from '../system';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-system-item',
  template: `
    <h3>Example Gear</h3>
    <ul>
      <li *ngFor="let item of items">{{ item.name }} - {{ item.description }}</li>
    </ul>

  `,
  styles: [
  ]
})
export class SystemItemComponent implements OnInit {
  items: Item[] = [];
  id: number = 0;

  constructor(private systemService: SystemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = +(params.get('id') || '');
        return this.systemService.getSystemItems(this.id);
      })
    ).subscribe((data) => {
      this.items = data;
    })
  }

}
