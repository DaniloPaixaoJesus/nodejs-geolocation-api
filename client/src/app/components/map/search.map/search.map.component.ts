import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-map-component',
  templateUrl: './search.map.component.html',
  styleUrls: ['./search.map.component.scss']
})
export class SearchMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {}

  ngOnInit() {
  }

}
