import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from 'angularfire2';

export const FBConf = {
    apiKey: 'AIzaSyA5-GB8bNNvAyO6EqhVEi_N2YNuzcVhlss',
    authDomain: 'places-45d27.firebaseapp.com',
    databaseURL: 'https://places-45d27.firebaseio.com',
    projectId: 'places-45d27',
    storageBucket: 'places-45d27.appspot.com',
    messagingSenderId: '985595811841'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AngularFireModule.initializeApp(FBConf)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
