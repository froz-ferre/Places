import { Injectable } from '@angular/core';
import { GooPlacesAPIKey } from '../../app.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class GooPlacesService {

  public places: Array<any>;

  constructor(private http: HttpClient) { }

  validateName(name: string): string {
    // cafe bristol => cafe+bristol
    return name = name.includes(' ') ?  name.split(' ').join('+') : name;
  }

  textSearch(query: string): Observable<any> {
    return this.http.get(
      `/maps/api/place/textsearch/json?query=${this.validateName(query)}&key=AIzaSyBPt5477YfVoR2BUv7d4VbBztsiCmINydk`,
      httpOptions
    ).pipe(map(res => res = res['results']));
  }
}
