import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-map-component',
  templateUrl: './search.map.component.html',
  styleUrls: ['./search.map.component.scss']
})
export class SearchMapComponent implements OnInit {

  title: string = 'Maps';
  zoomValue: number = 17;
  lat: number = -23.554251;
  lng: number = -46.632033;

  lat2: number = -23.554231; //-23.554231, -46.633138
  lng2: number = -46.633138;

  lat3: number = -23.554556; //-23.554556, -46.631958
  lng3: number = -46.631958;


  markerIcon: string = 'assets/images/baseline_directions_bus_black_18dp.png';

  constructor() {}

  ngOnInit() {
  }

}
