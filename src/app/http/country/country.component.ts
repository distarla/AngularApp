import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CountrydataService } from '../countrydata.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  pais = '';
  paisData: { name: { common: string }, capital: string[], population: number, flags: { png: string } } = {
    name: { common: '' },
    capital: [],
    population: 0,
    flags:{png:''}
  };

  constructor(private countryData: CountrydataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pais = this.activatedRoute.snapshot.params['id'];

    this.countryData.countries.forEach(country => {
      if (country.name.common == this.pais) {
        this.paisData.name.common = country.name.common;
        this.paisData.capital = country.capital;
        this.paisData.population = country.population;
        this.paisData.flags = country.flags;
      };
    });
  }
}

