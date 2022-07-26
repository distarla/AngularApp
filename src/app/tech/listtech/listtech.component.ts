import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechdataService } from '../techdata.service';

@Component({
  selector: 'app-listtech',
  templateUrl: './listtech.component.html',
  styleUrls: ['./listtech.component.css']
})
export class ListtechComponent implements OnInit {

  categ = "";

  techs: { name: string, info: string, url: string, category: string, level: number }[];

  constructor(private router: ActivatedRoute, private techData: TechdataService) {
    this.techs = this.techData.techs;
  }

  ngOnInit(): void {
    this.categ=this.router.snapshot.params['id']
  }

}
