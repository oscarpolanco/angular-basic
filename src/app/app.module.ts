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
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { SystemComponent } from './system/system.component';
import { SystemDetailComponent } from './system-detail/system-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SystemInfoComponent } from './system-info/system-info.component';
import { SystemItemComponent } from './system-item/system-item.component';
import { AccountInfoComponent } from './account-info/account-info.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'account', component: AccountComponent},
      {
        path: 'account/:id',
        component: AccountDetailComponent,
        children: [
          {path: 'info', component: AccountInfoComponent}
        ]
      },
      {path: 'habits', component: HabitHomeComponent},
    ]
  },
  {
    path: 'system',
    component: SystemComponent,
    children: [
      {
        path: 'detail/:id',
        component: SystemDetailComponent,
        children: [
          {path: 'info', component: SystemInfoComponent},
          {path: 'items', component: SystemItemComponent}
        ]
      }
    ]
  },
  {path: '', redirectTo:'/home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitDetailComponent,
    HabitItemComponent,
    HabitFormComponent,
    HomeComponent,
    HabitHomeComponent,
    AccountComponent,
    AccountDetailComponent,
    SystemComponent,
    SystemDetailComponent,
    NavBarComponent,
    SystemInfoComponent,
    SystemItemComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
