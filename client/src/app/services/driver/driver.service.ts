import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from './driver.model';
import envConf from '../../shared/env-config'

const URL = `${envConf.api.url}/api/v1/Drivers`

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDrivers(){
    console.log('getAllDrivers URL=>', URL);
    return this.getDriversMock(); //this.http.get<Driver[]>(`${URL}`);
  }

  getDriverById(id){
    console.log('getAllDrivers URL=>', URL);
    return this.getDriversMock(); //this.http.get<Driver>(`${URL}/${id}`);
  }

  createDriver(driver) {
    console.log('Driver=>', driver);
    console.log('createDriver URL=>', URL);
    return this.getDriversMock(); //this.http.post(`${URL}`, driver);
  }

  updateDriver(id, driver) {
    console.log('Driver=>', driver);
    console.log('updateDriver URL=>', `${URL}/${id}`);
    return this.getDriversMock(); //this.http.post(`${URL}/${id}`, driver);
  }

  getDriversMock(){
    let drivers = [
      { id: '1', name: 'Luana', login: 'LSILVA', password: 'dasdasd', profile: 'ADMINISTRADOR', status: 'ATIVO'}
    ]
    return Observable.create(observer => {
           observer.next(drivers)
           observer.complete()
    })
  }
}
