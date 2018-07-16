import { Component, OnInit } from '@angular/core';
import { GooPlacesService } from '../services/goo-places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  private searchText: string;

  constructor(private gooPlacesService: GooPlacesService, private router: Router) {
    this.searchText = '';
  }

  ngOnInit() {
  }

  search() {
    this.gooPlacesService.textSearch(this.searchText).subscribe(res => {console.log(res); this.gooPlacesService.places = res; });
    this.searchText = '';
    this.router.navigate(['./search']);
  }

}
