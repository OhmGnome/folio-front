import { Component, OnInit } from '@angular/core'
import { toFixedPipe, splitPipe, propPipe, genericEndpoints, genericEndpointsConstructor } from '../../core/constant/printAngular';

@Component({
  selector: 'app-angular-reusables',
  templateUrl: './angular-reusables.component.html',
  styleUrls: ['./angular-reusables.component.scss']
})
export class AngularReusablesComponent implements OnInit {

  resorts: any[]
  propPipe = propPipe
  splitPipe = splitPipe
  toFixedPipe = toFixedPipe
  genericEndpoints = genericEndpoints
  genericEndpointsConstructor = genericEndpointsConstructor

  constructor() { }

  ngOnInit() {
    this.resorts = [
      {
        name: 'Copper',
        visited: true
      },
      {
        name: 'Winter Park',
        visited: true
      },
      {
        name: 'Bogus Basin',
        visited: true
      },
      {
        name: 'Blue Wood',
        visited: true
      },
      {
        name: 'Mount Hood',
        visited: false
      },
      {
        name: 'Stevens Pass',
        visited: false
      },
      {
        name: 'White Pass',
        visited: false
      },
      {
        name: 'Steamboat',
        visited: false
      },
      {
        name: 'Breckenridge',
        visited: false
      },
      {
        name: 'Mt Baker',
        visited: false
      },
      {
        name: 'Hurricane Ridge',
        visited: false
      },
    ]
  }

  updateResorts(n: any): void {
    this.resorts = [...this.resorts]
  }

}
