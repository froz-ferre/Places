import { Injectable } from '@angular/core';
import { GooPlacesAPIKey } from '../../app.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
    // 'Origin': 'https://froz-ferre.github.io'
  })
};

@Injectable()
export class GooPlacesService {

  constructor(private http: HttpClient) { }

  test(): Observable<any> {
    return this.http.get(
      `/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=AIzaSyBPt5477YfVoR2BUv7d4VbBztsiCmINydk`,
      httpOptions
    );
  }

}
