import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCityPage } from '../add-city/add-city.page';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }


  async editFeatured(){
   const modal =  await this.modalCtrl.create({
    component : AddCityPage
   });
   modal.present();
  }

}
