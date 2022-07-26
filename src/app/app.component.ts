import { Component } from '@angular/core';
import { TechdataService } from './tech/techdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TechdataService]
})
export class AppComponent {
  
  constructor(private techData: TechdataService) { }
  
}
