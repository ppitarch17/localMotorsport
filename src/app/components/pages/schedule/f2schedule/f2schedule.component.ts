import { Component } from '@angular/core';
import { DatePipe } from '../../../../pipes/datepipe.pipe';
import { CountryCode } from '../../../../enum/flags';
import { Schedule } from '../../../../model/schedule';
import { f2schedule } from './f2schedule';

@Component({
  selector: 'app-f2schedule',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './f2schedule.component.html',
  styleUrl: './f2schedule.component.css'
})
export class F2scheduleComponent {

  countries = CountryCode;
  f2Schedule = f2schedule as any;

  ngOnInit() {
    this.f2Schedule.forEach((race: Schedule) => {
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
