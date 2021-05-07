import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NbpService {

  constructor(
    private http:HttpClient
  ) { }
  currencyKind;
  getCurrency(){
    return this.http.get(`https://api.nbp.pl/api/exchangerates/rates/a/${this.currencyKind}/`)
  }
}
