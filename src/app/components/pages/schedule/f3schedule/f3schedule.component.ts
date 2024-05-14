import { Component } from '@angular/core';
import { CountryCode } from '../../../../enum/flags';
import { Schedule } from '../../../../model/schedule';
import { DatePipe } from '../../../../pipes/datepipe.pipe';
import { f3schedule } from './f3schedule';

@Component({
  selector: 'app-f3schedule',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './f3schedule.component.html',
  styleUrl: './f3schedule.component.css'
})
export class F3scheduleComponent {
  countries = CountryCode;
  f3Schedule = f3schedule as any;

  ngOnInit() {
    this.f3Schedule.forEach((race: Schedule) => {
      let isoTime = new Date(race.date).toISOString().split('T')[0] + "T" + race.time; // Add current date to the time string
      let date = new Date(isoTime);
      let offset = date.getTimezoneOffset();
      date.setHours(date.getHours() - offset / 60);
      if (date < new Date()) {
        race.past = true;
      }
      race.time = date.toISOString().split('T')[1].slice(0, 5);
    });
  }
  getCode(country: string) {
    country = country.replace(" ", "");
    return "fi-" + this.countries[country as keyof typeof CountryCode];
  }
}
