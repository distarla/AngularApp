import { Component, OnInit } from '@angular/core';
import { CountrydataService } from '../countrydata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcountries',
  templateUrl: './listcountries.component.html',
  styleUrls: ['./listcountries.component.css']
})
export class ListcountriesComponent implements OnInit {

  countries: string[] = [];

  constructor(private countryData: CountrydataService, private router: Router) { }

  ngOnInit(): void {
    this.countryData.countries.forEach(country => {
      this.countries.push(country.name.common);
    })
  }

  onCountry(country: string) {
    this.router.navigate([['/country/' + country]]);
  }
}
