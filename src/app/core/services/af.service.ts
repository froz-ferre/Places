import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class AFService {

  savedPlaces: AngularFireList<Object>;

  constructor(private firebasedb: AngularFireDatabase) {
    this.savedPlaces = this.getPlaces();
   }

  save(place) {
    this.savedPlaces.push({
      id: place.id,
      title: place.name,
      address: place.formatted_address,
      rating: place.rating || null,
      types: place.types || null,
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
      added: Date.now()
    });
  }

  getPlaces() {
    this.savedPlaces = this.firebasedb.list('places');
    return this.savedPlaces;
  }

  removePlace($key: string): void {
    this.savedPlaces.remove($key);
  }
}
