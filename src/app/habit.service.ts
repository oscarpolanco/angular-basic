import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits = [
    {
      id: 1,
      title: 'Check in with parents once a week'
    },
    {
      id: 2,
      title: 'Record 2 videos per day'
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week'
    },
    {
      id: 4,
      title: 'Write for 20 minutes a day'
    },
  ];

  constructor() { }

  getHabits(): Observable<any> {
    return of(this.habits)
  }

  addHabit(newHabit: {id: number, title: string}) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
