import { Component } from '@angular/core';
import { NbpService } from '../services/nbp.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private nbpservice:NbpService
  ) {}

  currencyInputValue:any;
  currencyType:any;
  result:any;
  currencyValue:any;
  calc(){


    console.log(this.currencyType)
    this.nbpservice.currencyKind = this.currencyType;
    this.nbpservice.getCurrency().subscribe( result => {
      this.currencyValue = Object(result).rates[0].mid;
      return this.result = this.currencyInputValue/this.currencyValue;
    })

  }
}
