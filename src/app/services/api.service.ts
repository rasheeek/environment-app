import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  createUrl(subUrl: string) {
    return environment.apiUrl + subUrl;
  }

  getHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }


  getReq(subUrl : string) {
    return this.http.get(this.createUrl(subUrl + ''), {
      headers: this.getHeader(),
    });
  }


  getTest(subUrl : string) {
    // return this.http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?key=PC68PJKB87U5BHTKKER4E4DXS`, {
    //   headers: this.getHeader(),
    // });
    return this.http.get(`https://api.tomorrow.io/v4/weather/forecast?location=newyork&timesteps=1d&apikey=M9ZEgYjdcDwHwFGMqCHASSTgBH9Wx3Td`, {
      headers: this.getHeader(),
    });
  }


  
  
}
