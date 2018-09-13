import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle.model';
import envConf from '../../shared/env-config'

const URL = `${envConf.api.url}/api/v1/vehicles`

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpClient
  ) { }

  getAllVehiclees(){
    console.log('getAllVehiclees URL=>', URL);
    return this.getVehiclesMock(); //this.http.get<Vehicle[]>(`${URL}`);
  }

  getVehiclesMock(){
    let vehicles = [
      { id: '1', identification: 'ASD-3658', name: 'Mercedes-Benz Sprinter Executiva Van', model: 'Sprinter', brand: 'Mercedes', category: 'VAN', status: 'ATIVO', geoLocation:{lat: '', lon: ''}}
    ]
    return Observable.create(observer => {
           observer.next(vehicles)
           observer.complete()
    })
  }

  getOneVehiclesMock(){
    let vehicles = 
      { id: '1', identification: 'ASD-3658', name: 'Mercedes-Benz Sprinter Executiva Van', model: 'Sprinter', brand: 'Mercedes', category: 'VAN', status: 'ATIVO', geoLocation:{lat: '', lon: ''}}
    
    return Observable.create(observer => {
           observer.next(vehicles)
           observer.complete()
    })
  }

  getVehicleById(id){
    console.log('getVehicleById URL=>', URL);
    return this.getOneVehiclesMock(); // this.http.get<Vehicle>(`${URL}/${id}`);
  }

  createVehicle(vehicle) {
    console.log('user=>', vehicle);
    console.log('createVehicle URL=>', URL);
    return this.getOneVehiclesMock(); // this.http.post(`${URL}`, vehicle);
  }

  updateVehicle(id, vehicle) {
    console.log('user=>', vehicle);
    console.log('updateVehicle URL=>', `${URL}/${id}`);
    return this.getOneVehiclesMock(); // this.http.post(`${URL}/${id}`, vehicle);
  }
  
}
