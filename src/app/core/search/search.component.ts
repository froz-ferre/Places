import { GooPlacesService } from './../services/goo-places.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  modalRef: BsModalRef;
  config = {
    keyboard: true
  };

  constructor(private gooPlacesService: GooPlacesService,
              private modalService: BsModalService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  sanitize(lat, lng) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyBPt5477YfVoR2BUv7d4VbBztsiCmINydk&center=' + lat + ',' + lng);
  }

}
