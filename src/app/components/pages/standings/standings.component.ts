import { Component, inject } from '@angular/core';
import { F1Service } from '../../../services/f1/f1.service';
import { CountryCode } from '../../../enum/flags';
import { DatePipe } from '../../../pipes/datepipe.pipe';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.css'
})
export class StandingsComponent {
  standings: any = [];
  f1Service: any = inject(F1Service);
  countries = CountryCode;

  ngOnInit() {
    this.f1Service.getStandings()
      .then((data: any) => {
        this.standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      })
      .catch((error: any) => console.error(error));
  }

  getCode(country: string) {
    country = country.replace(" ", "");
    return "fi-" + this.countries[country as keyof typeof CountryCode];
  }
}
