import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AddCityPage } from '../add-city/add-city.page';
import { CitiesService, ICity } from 'src/app/services/cities.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {
  selectedCity: ICity | null = null;
  constructor(
    private citiesService: CitiesService,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.citiesService.selectedCity.subscribe((res) => {
      if (res) {
        this.selectedCity = res;
      } else {
        this.selectedCity = null;
        this.showAddCityModal();
      }
    });
  }

  async showAddCityModal() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Please add a city to start seeing weather datas',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {},
          cssClass: 'alert-btn',
        },
        {
          text: 'Continue',
          cssClass: 'alert-btn',
          handler: () => {
            this.addFeaturedCity();
          },
        },
      ],
    });
    await alert.present();
  }

  async addFeaturedCity() {
    const modal = await this.modalCtrl.create({
      component: AddCityPage,
    });
    modal.present();
  }


  async editFeatured(){
   const modal =  await this.modalCtrl.create({
    component : AddCityPage
   });
   modal.present();
  }

}
