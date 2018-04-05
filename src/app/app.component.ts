import { Component, OnInit } from '@angular/core';
import { env } from './core/model/constant';
import { Logger } from './core/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    let logger = new Logger
    if (env !== 'local' && env !== 'test-') logger.disableLogger()
  }
}
