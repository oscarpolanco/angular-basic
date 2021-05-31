import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item *ngFor="let habit of habits | async" [habit]="habit"></app-habit-item>
    </ul>
  `,
  styles: []
})

export class HabitListComponent implements OnInit {
  habits: Observable<Habit[]>;

  constructor(private habitService: HabitService) {
    this.habits = this.habitService.getHabits();
  }

  onAddHabit(newHabit: Habit) {
    this.habitService.addHabit(newHabit).subscribe();
  }

  ngOnInit(): void {}

}
