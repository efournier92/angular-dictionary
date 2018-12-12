import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Mashape-Key': 'YkXZwYFigfmshV99GuMXAW829gwzp1BpzqAjsnHoVeDhhhfaTE',
    'X-Mashape-Host': 'wordsapiv1.p.mashape.com',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiRoot: String = 'https://wordsapiv1.p.mashape.com/words/'

  constructor(
    private http: HttpClient
  ) { }

  getDefinitions(word) {
    let url = this.apiRoot + word;
    return this.http.get(url, httpOptions);
  }

}
