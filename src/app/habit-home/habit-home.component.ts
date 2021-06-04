import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-home',
  template: `
  <div class="container">
    <h1>{{ title }}</h1>
    <app-habit-list></app-habit-list>
  </div>
  `,
  styles: ['h1 { color: purple }']
})
export class HabitHomeComponent {
  title = 'Habit Tracker';
}
