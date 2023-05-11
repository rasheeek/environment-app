import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private citiesService : CitiesService) {
   let city = localStorage.getItem('selectedCity');
   if(city){
    this.citiesService.selectedCity.next(JSON.parse(city))
   }
  }
 
}
