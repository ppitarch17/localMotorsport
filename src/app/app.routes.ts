import { Routes } from '@angular/router';

import { HomeComponent } from './components/core/home/home.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { StandingsComponent } from './components/pages/standings/standings.component';
import { F1scheduleComponent } from './components/pages/schedule/f1schedule/f1schedule.component';
import { F2scheduleComponent } from './components/pages/schedule/f2schedule/f2schedule.component';
import { F3scheduleComponent } from './components/pages/schedule/f3schedule/f3schedule.component';
import { FrecascheduleComponent } from './components/pages/schedule/frecaschedule/frecaschedule.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'home/:id', component: HomeComponent},
    { path: 'schedule', component: ScheduleComponent, children: [
        { path: 'f1', component: F1scheduleComponent },
        { path: 'f2', component: F2scheduleComponent },
        { path: 'f3', component: F3scheduleComponent },
        { path: 'freca', component: FrecascheduleComponent },
        
    ]
    },
    { path: 'standings', component: StandingsComponent, children: [
    ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
