import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VehicleService } from '../../../services/vehicle/vehicle.service';
import { Vehicle } from '../../../services/vehicle/vehicle.model';

import { DriverService } from '../../../services/driver/driver.service';
import { Driver } from '../../../services/driver/driver.model';

@Component({
  selector: 'app-form-vehicle',
  templateUrl: './form.vehicle.component.html',
  styleUrls: ['./form.vehicle.component.scss']
})
export class FormVehicleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
    private driverService: DriverService
  ) { }

  vehicleId: number;
  vehicle: Vehicle = new Vehicle();

  drivers: Driver[];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        this.vehicleId = Number(params.get('id'))
        this.vehicleService.getVehicleById(this.vehicleId).subscribe(
          v =>{
            console.log('getvehicleById==>', v)
            this.vehicle = v;
          }
        )
      }else{
        this.vehicle = new Vehicle();
      }
    });
  }

  save(){
    if(this.vehicle.id){
      this.upDatevehicle();
    }else{
      this.createvehicle();
    }
  }

  createvehicle(){
    this.vehicleService.createVehicle(this.vehicle).subscribe(
      u =>{
        this.router.navigate(['/vehicle'])
      },
      err =>{
        console.error(err);
      });
  }

  upDatevehicle(){
    this.vehicleService.updateVehicle(this.vehicleId, this.vehicle).subscribe(
      p =>{
        this.router.navigate(['/vehicle'])
      },
      err =>{
        console.error(err);
      });
  }

  voltar() {
    window.history.back();
  }

}
