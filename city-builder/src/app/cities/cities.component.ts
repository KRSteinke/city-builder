import { Component, OnInit } from '@angular/core';
import {City} from './city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  city: City = {
    uuid: 1,
    name: 'Gardania',
    populationCount: 1500
  };

  constructor() { }

  ngOnInit() {
  }

}
