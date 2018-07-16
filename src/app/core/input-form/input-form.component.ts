import { Component, OnInit } from '@angular/core';
import { GooPlacesService } from '../services/goo-places.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  private searchText: string;

  constructor(private gooPlacesService: GooPlacesService) { 
    this.searchText = '';
  }

  ngOnInit() {
  }

  search() {
    this.gooPlacesService.textSearch(this.searchText).subscribe(res => console.log(res));
    this.searchText = '';
  }

}
