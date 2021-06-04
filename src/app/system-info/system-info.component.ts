import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-system-info',
  template: `
    <h3>Information</h3>
    <p>{{ info }}</p>
  `,
  styles: [
  ]
})
export class SystemInfoComponent implements OnInit {
  info: string
  id: number

  constructor(private systemService: SystemService, private route: ActivatedRoute) {
    this.info = '';
    this.id = 0;
  }

  ngOnInit(): void {
    this.route.parent?.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = +(params.get('id') || '');
        return this.systemService.getSystemInfo(this.id);
      })
    ).subscribe((data) => {
      this.info = data;
    })
  }
}
