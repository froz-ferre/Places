import { AFService } from './services/af.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SavedPlacesComponent } from './saved-places/saved-places.component';
import { GooPlacesService } from './services/goo-places.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

const appRoutes: Routes = [
  {path: '', redirectTo: 'saved', pathMatch: 'full'},
  {path: 'saved', component: SavedPlacesComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: 'saved', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot()
  ],
  declarations: [ContentComponent, InputFormComponent, SavedPlacesComponent, SearchComponent],
  providers: [GooPlacesService, AFService],
  exports: [
    ContentComponent,
    InputFormComponent,
    SavedPlacesComponent,
    SearchComponent
  ]
})
export class CoreModule { }
