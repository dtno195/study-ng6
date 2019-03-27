import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
// import '@rxjs/add/operator/toPromise';
@Injectable()
export class WeatherService{
    constructor(private http:Http){
    
    }
    // getTemp(cityName: string){
    //     const url = 'https://api.openweathermap.org/data/2.5/weather?appid=c63ab5b28bfb71c3a3f97beb88ed777f&units=metric&q='+cityName;
    //     return this.http.get(url)
    //     .toPromise()
    //     .then(res=>res.json())
    //     .then(resJson=>resJson.name.temp);
    // }
}