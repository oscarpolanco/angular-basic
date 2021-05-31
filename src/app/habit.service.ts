import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Habit[];

  constructor(private http: HttpClient) {
    this.habits = [];
  }

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>("/api/habits");
  }

  addHabit(newHabit: Habit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
