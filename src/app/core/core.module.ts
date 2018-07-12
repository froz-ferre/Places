import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { PlaceCardComponent } from './place-card/place-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, InputFormComponent, PlaceCardComponent],
  exports: [
    HeaderComponent,
    InputFormComponent,
    PlaceCardComponent
  ]
})
export class CoreModule { }
