import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2'

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyATDorIwPe-OiPJWrcbTVfVe7MceUjYwis",
    authDomain: "epl-teams.firebaseapp.com",
    databaseURL: "https://epl-teams.firebaseio.com",
    storageBucket: "epl-teams.appspot.com",
    messagingSenderId: "543558948274"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
