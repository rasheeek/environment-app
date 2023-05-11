import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ICity, CitiesService } from 'src/app/services/cities.service';
import { AddCityPage } from '../add-city/add-city.page';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {
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

  loadDatas() {
    console.log('Loading datas');
    this.loadingCtrl.create().then((loadingEl) => {
      loadingEl.present();
      this.apiService.get10DaysForecast(this.slectedCity).subscribe(
        (res) => {
          console.log('15 days forecast ', res);
          this.weatherData = res;
          loadingEl.dismiss();
        },
        (err) => {
          loadingEl.dismiss();
        }
      );
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

  fahrenheitToCelsius(fahrenheit: number): string {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(1);
  }

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
