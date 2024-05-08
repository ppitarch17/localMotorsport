import { Routes } from '@angular/router';

import { HomeComponent } from './components/core/home/home.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home/:id', component: HomeComponent},
    { path: 'schedule', component: ScheduleComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
