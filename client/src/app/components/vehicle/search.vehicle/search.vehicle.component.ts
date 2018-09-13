import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { VehicleService } from '../../../services/vehicle/vehicle.service';
import { Vehicle } from '../../../services/vehicle/vehicle.model'

@Component({
  selector: 'app-search-vehicle-component',
  templateUrl: './search.vehicle.component.html',
  styleUrls: ['./search.vehicle.component.scss']
})
export class SearchVehicleComponent implements OnInit {

  vehicles: Vehicle[];

  // exibicao de mensagem de erro na tela
  isError: Boolean = false;
  error: string;

  // exibicao de loader na tela
  exibeProgress: Boolean = false;
  value: Number = 0;

  constructor(
    private vehicleService: VehicleService,
    private router: Router
  ) { }

  routeFormVehicles(id) {
    this.router.navigate([`/vehicle/form/${id}`]);
  }

  routeFormNewVehicles() {
    this.router.navigate([`/vehicle/form`]);
  }

  back() {
    window.history.back();
  }

  ngOnInit() {
    this.vehicleService.getAllVehiclees()
      .subscribe(res => {
        console.log('>>>> get vehicles res=', res);
        this.vehicles = res;
        this.exibeProgress = false;
        // this.router.navigate(['/users'])
    },
    error => {
      console.log('error service get vehicles ==>', error);
      this.exibeProgress = false;
      this.isError = true;
      this.error = `Não há vehicleos para ser exibido`;
    });

  }
}
