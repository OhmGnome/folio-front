import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/zip';

import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

export const sessionNumber = 'sessionConfirmationNumber'
export const AhsToken = 'AhsToken'

@Injectable()
export class ConfigService {

  public headers = {
    'Content-Type': 'application/json',
    'sessionConfirmationNumber': '',
    'AhsToken': '',
  }

  //TODO set orderId from step1
  orderId: string = 'o145570005'

  constructor() {
    if (!this.headers[sessionNumber]) this.headers[sessionNumber] = window.localStorage.getItem(sessionNumber) || ''
    if (!this.headers[AhsToken]) this.headers[AhsToken] = window.localStorage.getItem(AhsToken) || ''
  }


  handleError(error: any): Observable<any> {
    console.error(error)
    return Observable.throw(error.message || error)
  }

  handleErrorPromise(error: any): Promise<any> {
    console.error(error)
    return Promise.reject(error.message || error)
  }

  handleRetry(attempts: Observable<any>) {
    console.log('attempts', attempts)
    const statusTimeouts = [404, 408, 504, 598, 524, 522, 527]
    return attempts.zip(Observable.range(1, 5)).mergeMap(([error, i]) => {
      if (statusTimeouts.includes(error.status)) {
        //Wait, then retry
        return Observable.timer(i * 2000)
      } else {
        return Observable.throw(error || 'empty response')
      }
    })
  }

  newBody() {
    let body: any = {}
    let json: any = {}
    body.json = json
    body.AhsToken = this.headers.AhsToken
    body.json.orderId = this.orderId
    return body
  }

  newOptions() {
    let options: any = {}
    options.headers = this.headers
    return options
  }

  async sleep(ms) {
    await wait(ms);
    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
}
