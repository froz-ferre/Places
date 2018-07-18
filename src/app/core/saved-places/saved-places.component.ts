import { AFService } from './../services/af.service';
import { Component, OnInit } from '@angular/core';
import { GooPlacesService } from '../services/goo-places.service';

@Component({
  selector: 'app-saved-places',
  templateUrl: './saved-places.component.html',
  styleUrls: ['./saved-places.component.css']
})
export class SavedPlacesComponent implements OnInit {

  places;

  constructor(private gooPlacesService: GooPlacesService,
              private afService: AFService) { }

  ngOnInit() {
    this.afService.getPlaces().snapshotChanges()
    .subscribe(item => {
      this.places = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.places.push(x);
      });

      // sort array by isChecked like false -> true
      this.places.sort((a, b) => a.added - b.added);
});
  }

}
