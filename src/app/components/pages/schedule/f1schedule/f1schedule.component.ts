import { Component, inject } from '@angular/core';

import { F1Service } from '../../../../services/f1/f1.service';
import { CountryCode } from '../../../../enum/flags';
import { Schedule } from '../../../../model/schedule';
import { DatePipe } from '../../../../pipes/datepipe.pipe';

@Component({
  selector: 'app-f1schedule',
  standalone: true,
  imports: [DatePipe],
  providers: [],
  templateUrl: './f1schedule.component.html',
  styleUrl: './f1schedule.component.css'
})
export class F1scheduleComponent {

  f1Service: any = inject(F1Service);
  f1Schedule: Schedule[] = {} as Schedule[];
  countries = CountryCode;
  lastRace: Schedule = {} as Schedule;

  ngOnInit() {
    this.f1Service.getSchedule()
      .then((data: any) => {
        this.f1Schedule = data.MRData.RaceTable.Races
        this.f1Schedule.forEach((race: Schedule) => {
          let isoTime = new Date(race.date).toISOString().split('T')[0] + "T" + race.time; // Add current date to the time string
          let date = new Date(isoTime);
          let offset = date.getTimezoneOffset();
          date.setHours(date.getHours() - offset / 60);
          if (date < new Date()) {
            race.past = true;
          }
          race.time = date.toISOString().split('T')[1].slice(0, 5);
        });
      })
      .catch((error: any) => console.error(error));
    this.f1Service.getResults()
      .then((data: any) => {
        this.lastRace = data.MRData.RaceTable.Races[0];
      });
  }

  getCode(country: string) {
    country = country.replace(" ", "");
    return "fi-" + this.countries[country as keyof typeof CountryCode];
  }

}
