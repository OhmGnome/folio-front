import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Promo } from '../model/promo'
import { ConfigService } from './config.service'

// Service functions should take the object to be saved as a parameter, they should only call the rest endpoint, handle errors, and return the data from the response object

@Injectable()
export class PromoService {
  promo: Observable<Promo>;
  pCode: string

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCache(): Observable<Promo> {
    if (!this.promo) {
      this.promo = this.get()
      return this.promo
    } else {
      return this.promo
    }
  }

  get(priorityCode?: string): Observable<Promo> {
    this.config.sleep(1000)
    var data = {
      "data": {
        "DiscountResponse": [
          {
            "@class": "ahs.commerce.pricing.Discount",
            "discountType": "amountOff",
            "discountValue": "25.0",
            "eligibleRules": {
              "serviceFee": [
                "75.0"
              ],
              "SKUID": [
                "sku400115"
              ]
            },
            "global": false,
            "promotionName": "",
            "valid": true
          }
        ]
      },
      "status": 200,
      "config": {
        "method": "POST",
        "transformRequest": [
          null
        ],
        "transformResponse": [
          null
        ],
        "jsonpCallbackParam": "callback",
        "url": "\/rest\/model\/ahs\/services\/rest\/DicountApiRestActor\/reteriveDiscountDetails",
        "headers": {
          "Content-Type": "application\/json",
          "Accept": "application\/json, text\/plain, *\/*"
        },
        "data": {
          "copounCode": "",
          "siteId": "100001",
          "state": "TX",
          "ordersCount": 0
        }
      },
      "statusText": "OK"
    }

    let promo = data.data.DiscountResponse[0] as Promo
    promo.message = {} as any
    return Observable.of(promo)
  }

  save(priorityCode: string){
    console.log('TODO implement promo save')
  }

}
