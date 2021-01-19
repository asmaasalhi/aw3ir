import { Injectable } from '@angular/core';
import { MeteoItem } from '../meteoItem';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable({ providedIn: 'root' })
export class MeteoService {

  constructor() { }


  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    let m = new MeteoItem();

    return fetch('https://api.openweathermap.org/data/2.5/weather/?q=' + name + '&units=metric&lang=fr&appid=3f74c125e10f79dca60043c6f245bf23')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        // test du code retour
        // 200 = OK
        // 404 = city not found 
        console.log('halloween');
         if (json.cod === 200) {
          console.log(json);
          console.log("testing");
          return Promise.resolve(json);
        } else {
          m.weather = json;

          console.error('Météo introuvable pour ' + name
            + ' (' + json.message + ')');

          return Promise.reject('Météo introuvable pour ' + name
          + ' (' + json.message + ')');
        }

      });

  }
}