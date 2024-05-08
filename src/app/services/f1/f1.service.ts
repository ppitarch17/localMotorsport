import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class F1Service {

  constructor() { }

  getSchedule(): Promise<any>{
    return fetch('https://ergast.com/api/f1/current.json')
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));
  }

  getResults(): Promise<any>{
    return fetch('https://ergast.com/api/f1/current/last/results.json')
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));
  }
}
