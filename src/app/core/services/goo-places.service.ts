import { Injectable } from '@angular/core';
import { GooPlacesAPIKey } from '../../app.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class GooPlacesService {

  constructor(private http: HttpClient) { }

  validateName(name: string): string {
    // Arctic Monkeys => Arctic+Monkeys
    return name = name.includes(' ') ?  name.split(' ').join('+') : name;
  }

  textSearch(query: string): Observable<any> {
    return this.http.get(
      `/maps/api/place/textsearch/json?query=${this.validateName(query)}&key=AIzaSyBPt5477YfVoR2BUv7d4VbBztsiCmINydk`,
      httpOptions
    );
  }
}
