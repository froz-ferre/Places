import { AFService } from './../services/af.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { GooPlacesService } from '../services/goo-places.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-saved-places',
  templateUrl: './saved-places.component.html',
  styleUrls: ['./saved-places.component.css']
})
export class SavedPlacesComponent implements OnInit {

  places;
  modalRef: BsModalRef;

  constructor(private gooPlacesService: GooPlacesService,
              private afService: AFService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.afService.getPlaces().snapshotChanges()
    .subscribe(item => {
      this.places = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.places.push(x);
      });

      this.places.sort((a, b) => b.added - a.added);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  decline(): void {
    this.modalRef.hide();
  }

  remove($key) {
    this.afService.removePlace($key);
    this.modalRef.hide();
  }

}
