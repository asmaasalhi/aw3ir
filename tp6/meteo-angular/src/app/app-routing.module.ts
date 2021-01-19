import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteoDetailComponent } from './meteo-detail/meteo-detail.component';
import { MeteoComponent } from './meteo/meteo.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MeteoItem } from './meteoItem';
import { MeteoService } from './services/meteo.service';
const routes: Routes = [

 { path: 'meteo/:name',  // la page  affichant la météo prendra comme paramètre 'name'
  component: MeteoDetailComponent }, // Ce component fera l'appel AJAX et afficher les données reçues par openWeatherMap


];

@NgModule({
  declarations : [MeteoDetailComponent],
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule,CommonModule],
 
  
})
export class AppRoutingModule { }
