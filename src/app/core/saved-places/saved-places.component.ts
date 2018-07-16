import { Component, OnInit } from '@angular/core';
import { GooPlacesService } from '../services/goo-places.service';

@Component({
  selector: 'app-saved-places',
  templateUrl: './saved-places.component.html',
  styleUrls: ['./saved-places.component.css']
})
export class SavedPlacesComponent implements OnInit {

  constructor(private gooPlacesService: GooPlacesService) { }

  ngOnInit() {
    this.testMeth();
  }

  testMeth() {
    // this.gooPlacesService.textSearch().subscribe(res => console.log(res));
  }

}
