import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechdataService {

  categs = ['Frontend','Backend','Mobile','DBA'];

  techs = [{
    name:'Angular',
    info:'Javascript framework',
    url:'https:angular.io',
    category:'Frontend',
    level: 90
  }, {
    name: 'React',
    info: 'Javascript framework',
    url: 'https:react.io',
    category: 'Backend',
    level: 80
  }]
  
  constructor() { }
}
