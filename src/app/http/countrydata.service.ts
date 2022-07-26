import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountrydataService {

  countries!: {name:{common:string},capital: string[], population: number,flags:{png:string}}[];

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http
      .get('https://restcountries.com/v3.1/subregion/europe')
      .subscribe(posts => {
        this.countries = <[]>posts;
      })
  }
}
