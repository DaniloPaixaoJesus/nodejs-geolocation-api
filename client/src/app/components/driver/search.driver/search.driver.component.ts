import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DriverService } from '../../../services/driver/driver.service';
import { Driver } from '../../../services/driver/driver.model'

@Component({
  selector: 'app-search-driver-component',
  templateUrl: './search.driver.component.html',
  styleUrls: ['./search.driver.component.scss']
})
export class SearchDriverComponent implements OnInit {

  drivers: Driver[];

  // exibicao de mensagem de erro na tela
  isError: Boolean = false;
  error: string;

  // exibicao de loader na tela
  exibeProgress: Boolean = false;
  value: Number = 0;

  constructor(
    private driverService: DriverService,
    private router: Router
  ) { }

  routeFormDriver(id) {
    this.router.navigate([`/driver/form/${id}`]);
  }

  routeFormNewDriver() {
    this.router.navigate([`/driver/form`]);
  }

  back() {
    window.history.back();
  }

  ngOnInit() {
    this.driverService.getDriversMock() //getAllDrivers()
      .subscribe(res => {
        console.log('>>>> get Drivers res=', res);
        this.drivers = res;
        this.exibeProgress = false;
        // this.router.navigate(['/Drivers'])
    },
    error => {
      console.log('error service get Drivers ==>', error);
      this.exibeProgress = false;
      this.isError = true;
      this.error = `Have no Drivers`;
    });

  }
}
