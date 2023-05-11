import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CitiesService, ICity } from 'src/app/services/cities.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.page.html',
  styleUrls: ['./add-city.page.scss'],
})
export class AddCityPage implements OnInit {

  cities : ICity[] = [];
  searchName : string = '';

  constructor(private modalCtrl : ModalController, private citiesService : CitiesService) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }


  search() {
  if(this.searchName.length > 2){
    // this.resetChanges();
    if (!(this.searchName === '')) {
      const searchResult = this.citiesService.cities.filter((currentList) => {
        if (currentList.name && this.searchName) {
          return (
            currentList.name
              .toLowerCase()
              .indexOf(this.searchName.toLowerCase()) > -1
          );
        }else{
          return false
        }
      });
      this.cities = searchResult;
    }
  }else{
    this.cities = [];
  }
  }

  // resetChanges() {
  //   this.cities = this.citiesUnfiltered;
  // }





}
