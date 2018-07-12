import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { PlaceCardComponent } from './place-card/place-card.component';
import { GooPlacesService } from './services/goo-places.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, InputFormComponent, PlaceCardComponent],
  providers: [GooPlacesService],
  exports: [
    HeaderComponent,
    InputFormComponent,
    PlaceCardComponent
  ]
})
export class CoreModule { }
