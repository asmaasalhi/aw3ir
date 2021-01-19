import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MeteoService} from '../services/meteo.service'
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-meteo-detail',
  templateUrl: './meteo-detail.component.html',
  styleUrls: ['./meteo-detail.component.css']
})
export class MeteoDetailComponent implements OnInit {

  meteo : any;

  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService,
    private location: Location
  ) {}

  ngOnInit() {
    console.log("hello me e ");
    this.getMeteo();
    
  }


  /*ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }*/
  

  getMeteo(): void {
    const name = this.route.snapshot.paramMap.get('name');
    console.log('getmeteo',name);
    this.meteoService.getMeteo(name)
      .then(meteo => this.meteo = meteo)
      .catch(fail => this.meteo = fail);
     
      console.log('this is meto', this.meteo);
  }

}