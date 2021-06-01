import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitDetailComponent } from './habit-detail/habit-detail.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { HabitFormComponent } from './habit-form/habit-form.component';
import { HomeComponent } from './home/home.component';
import { HabitHomeComponent } from './habit-home/habit-home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'habits', component: HabitHomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitDetailComponent,
    HabitItemComponent,
    HabitFormComponent,
    HomeComponent,
    HabitHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
