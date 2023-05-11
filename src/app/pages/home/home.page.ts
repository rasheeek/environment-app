import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { CitiesService, ICity } from 'src/app/services/cities.service';
import { AddCityPage } from '../add-city/add-city.page';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slectedCity: ICity | null = null;
  weatherData: any = null;

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
        this.slectedCity = res;
        this.loadDatas();
      } else {
        this.slectedCity = null;
        this.showAddCityModal();
        this.weatherData = null;
      }
    });
  }

  // Loading the weather datas for the selected city
  loadDatas() {
    this.loadingCtrl.create().then((loadingEl) => {
      loadingEl.present();
      this.apiService.getTodayDatas(this.slectedCity).subscribe(
        (res) => {
          this.weatherData = res;
          loadingEl.dismiss();
        },
        (err) => {
          loadingEl.dismiss();
        }
      );
    });
  }

  // Modal to be shown when a city is not added already
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

  // Function to convert the Fahrenheit temperature to celcius
  fahrenheitToCelsius(fahrenheit: number): string {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(1);
  }

  // Function that returns the time of the day
  getTimeForIndex(index: number) {
    let time = 0;
    let amOrPm = '';
    if (index < 12) {
      amOrPm = 'am';
      if (index == 0) {
        time = 12;
      } else {
        time = index;
      }
    } else {
      amOrPm = 'pm';
      if(index == 12){
        time = 12;
      }else {
        time = index - 12
      }
    }
    return time + ' ' + amOrPm;
  }
}
