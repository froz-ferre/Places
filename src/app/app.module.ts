import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from 'angularfire2';


// P.S. Я знаю, что так делать нельзя, но для быстроты и простого деплоя...
export const FBConf = {
    apiKey: 'AIzaSyA5-GB8bNNvAyO6EqhVEi_N2YNuzcVhlss',
    authDomain: 'places-45d27.firebaseapp.com',
    databaseURL: 'https://places-45d27.firebaseio.com',
    projectId: 'places-45d27',
    storageBucket: 'places-45d27.appspot.com',
    messagingSenderId: '985595811841'
};

export const GooPlacesAPIKey = 'AIzaSyBPt5477YfVoR2BUv7d4VbBztsiCmINydk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FBConf)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
