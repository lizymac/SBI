import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RaffleComponent } from './raffle/raffle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConditionsComponent } from './conditions/conditions.component';
import { ProServComponent } from './pro-serv/pro-serv.component';

const appRoutes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'raffle', component:RaffleComponent},
  {path: 'conditions', component:ConditionsComponent},
  {path: 'pro-serv', component:ProServComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    RaffleComponent,
    ConditionsComponent,
    ProServComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
