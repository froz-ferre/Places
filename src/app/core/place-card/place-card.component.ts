import { Component, OnInit } from '@angular/core';
import { GooPlacesService } from '../services/goo-places.service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {

  constructor(private gooPlacesService: GooPlacesService) { }

  ngOnInit() {
    this.testMeth();
  }

  testMeth() {
    this.gooPlacesService.test().subscribe(res => console.log(res));
  }

}
