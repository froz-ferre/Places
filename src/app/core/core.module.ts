import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SavedPlacesComponent } from './saved-places/saved-places.component';
import { GooPlacesService } from './services/goo-places.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeaderComponent, InputFormComponent, SavedPlacesComponent, SearchComponent],
  providers: [GooPlacesService],
  exports: [
    HeaderComponent,
    InputFormComponent,
    SavedPlacesComponent,
    SearchComponent
  ]
})
export class CoreModule { }
