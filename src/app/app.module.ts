import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';

// Implement barrels for making imports easier and groupable
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AngularFireDatabase, DataService, AuthService, AngularFireAuth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
