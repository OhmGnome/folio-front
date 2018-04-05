import { Component, OnInit } from '@angular/core';
import { onWindowResize } from '../../core/constant/printVanilla';

@Component({
  selector: 'app-vanilla-reusables',
  templateUrl: './vanilla-reusables.component.html',
  styleUrls: ['./vanilla-reusables.component.scss']
})
export class VanillaReusablesComponent implements OnInit {

  onWindowResize = onWindowResize

  constructor() { }

  ngOnInit() {
  }

}
