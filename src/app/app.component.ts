import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <app-habit-list></app-habit-list>
    </div>
  `,
  styles: ['h1 { color: purple }']
})
export class AppComponent {
  title = 'Habit Tracker';
}
