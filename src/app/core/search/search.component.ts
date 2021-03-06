import { AFService } from './../services/af.service';
import { GooPlacesService } from './../services/goo-places.service';
import { Component, OnInit, TemplateRef, ViewChild, Renderer2, Input, AfterViewInit, ElementRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('mapFrame') frame;

  link;
  modalRef: BsModalRef;
  config = {
    keyboard: true
  };

  constructor(private gooPlacesService: GooPlacesService,
              private afService: AFService,
              private modalService: BsModalService,
              private sanitizer: DomSanitizer,
              private renderer: Renderer2,
              private router: Router) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  sanitize(lat, lng) {
    console.log(this.frame);
    // tslint:disable-next-line:max-line-length
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyBPt5477YfVoR2BUv7d4VbBztsiCmINydk&center=' + lat + ',' + lng);
    this.renderer.setAttribute(this.frame.nativeElement, 'src', this.link);
  }

  savePlace(place) {
    this.afService.save(place);
    this.router.navigate(['saved']);
  }

}
