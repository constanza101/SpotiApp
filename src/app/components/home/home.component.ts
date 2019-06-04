import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  countries: any[] = [];

  constructor( private _http: HttpClient) {
    const URL = 'https://restcountries.eu/rest/v2/lang/es';
    console.log('contructor home hecho');
  
    this._http.get(URL)
        .subscribe ((response: any[]) => {
          this.countries = response;
          console.log(response);
        });

   }

  ngOnInit() {
  }

}
