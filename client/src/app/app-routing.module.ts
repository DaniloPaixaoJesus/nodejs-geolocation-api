import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {SearchDriverComponent} from './components/driver/search.driver/search.driver.component';
import {FormDriverComponent} from './components/driver/form.driver/form.driver.component';
import {SearchVehicleComponent} from './components/vehicle/search.vehicle/search.vehicle.component';
import {FormVehicleComponent} from './components/vehicle/form.vehicle/form.vehicle.component';
import {SearchMapComponent} from './components/map/search.map/search.map.component';

const appRoutes: Routes = [
  {
    path: '',
    // component: LoginComponent
     component: SearchMapComponent
  },
  {
    path: 'map',
    // component: LoginComponent
     component: SearchMapComponent
  },
  {
    path: 'driver',
    component: SearchDriverComponent
  },
  {
    path: 'driver/form',
    component: FormDriverComponent
  },
  {
    path: 'driver/form/:id',
    component: FormDriverComponent
  },
  {
    path: 'vehicle',
    component: SearchVehicleComponent
  },
  {
    path: 'vehicle/form',
    component: FormVehicleComponent
  },
  {
    path: 'vehicle/form/:id',
    component: FormVehicleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
