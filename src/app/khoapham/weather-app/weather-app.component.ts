import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
  providers: [WeatherService]
})
export class WeatherAppComponent implements OnInit {
  txtCityname = ''; 
  cityName = '';
  temp=null;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.weatherService.getTemp('Tokyo')
    // .then(temp =>console.log(temp))
    // .catch(err => console.log(err))
  }

  getWeather(){
    // this.weatherService.getTemp(this.txtCityname)
    // .then(temp=>{
    //   this.cityName = this.txtCityname;
    //   this.temp = temp;
    // })
    // .catch(err=>console.log(err))
  }

}
