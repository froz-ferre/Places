import { Injectable } from '@angular/core';
import { GooPlacesAPIKey } from '../../app.module';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GooPlacesService {

  constructor(private http: HttpClient) { }

  test() {
    return this.http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=&{GooPlacesAPIKey}`);
  }

}
