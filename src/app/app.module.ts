import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule
  ],
  providers: [ AngularFireDatabase, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
