import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';

// Implement barrels for making imports easier and groupable
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutes
  ],
  providers: [ AngularFireDatabase, DataService, AuthService, AngularFireAuth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
