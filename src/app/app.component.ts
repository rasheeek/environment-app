import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service';

import { Network } from '@capacitor/network';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private citiesService: CitiesService,
    private alertController: AlertController
  ) {
    let city = localStorage.getItem('selectedCity');
    if (city) {
      this.citiesService.selectedCity.next(JSON.parse(city));
    }
    
// Code to check if we have an active internet connection
    Network.getStatus().then((status) => {
      if (status.connected) {
        console.log('INTERNET CONNECTED');
      } else {
        this.showNoInternetAlert();
      }
    });
  }

  async showNoInternetAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Please connect to internet to load datas',
      buttons: [
        {
          text: 'Okay',
          cssClass: 'alert-btn',
          handler: () => {},
        },
      ],
    });
    await alert.present();
  }
}
