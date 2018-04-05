import { Component, OnInit } from '@angular/core'

import { autoForm, autoFormHTML } from '../../core/constant/printAngularJS'

@Component({
  selector: 'app-angular-js-reusables',
  templateUrl: './angular-js-reusables.component.html',
  styleUrls: ['./angular-js-reusables.component.scss']
})
export class AngularJsReusablesComponent implements OnInit {

  autoForm = autoForm
  autoFormHTML = autoFormHTML

  constructor() { }

  ngOnInit() {
  }

}
