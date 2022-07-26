import { Component, OnInit } from '@angular/core';
import { TechdataService } from '../techdata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styleUrls: ['./addtech.component.css']
})
export class AddtechComponent implements OnInit {

  categs: string[] = [];

  techs: { name: string, info: string, url: string, category: string, level: number }[];
  
  constructor(private techData: TechdataService) {
    this.techs = this.techData.techs;
    this.categs = this.techData.categs;
  }

  ngOnInit(): void { 
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    this.techs.push({
      name: form.form.value.userData.name,
      info: form.form.value.userData.info,
      url: form.form.value.userData.url,
      category: form.form.value.category,
      level: form.form.value.userData.level
    });
    form.form.reset();
  }

}
