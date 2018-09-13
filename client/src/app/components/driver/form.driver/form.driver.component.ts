import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DriverService } from '../../../services/driver/driver.service';
import { Driver } from '../../../services/driver/driver.model'

@Component({
  selector: 'app-form-driver',
  templateUrl: './form.driver.component.html',
  styleUrls: ['./form.driver.component.scss']
})
export class FormDriverComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private driverService: DriverService
  ) { }

  driverId: number;
  driver: Driver = new Driver();

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        this.driverId = Number(params.get('id'))
        this.driverService.getDriverById(this.driverId).subscribe(
          d =>{
              this.driver = d;
          }
        )
      }else{
        this.driver = new Driver();
      }
    });
  }

  save(){
    if(this.driver.id){
      this.upDateDriver();
    }else{
      this.createDriver();
    }
  }

  createDriver(){
    this.driverService.createDriver(this.driver).subscribe(
      u =>{
        this.router.navigate(['/driver'])
      },
      err =>{
        console.error(err);
      });
  }

  upDateDriver(){
    this.driverService.updateDriver(this.driverId, this.driver).subscribe(
      d =>{
        this.router.navigate(['/driver'])
      },
      err =>{
        console.error(err);
      });
  }

  voltar() {
    window.history.back();
  }

}
