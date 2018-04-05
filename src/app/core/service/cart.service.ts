import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'

import { Cart } from '../model/cart'
import { ConfigService } from './config.service'

@Injectable()
export class CartService {
  cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({} as Cart)

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCache(): BehaviorSubject<Cart> {
    if (!this.cart.value.id) {
      this.get()
      return this.cart
    } else {
      return this.cart
    }
  }

  get(): Observable<Cart> {
    this.config.sleep(1500)
    let data = {
      "byoPrice": 24,
      "id": "o145570005",
      "discount": null,
      "sessionConfirmationNumber": "false",
      "partnerSalesSource": "169921",
      "eFulfillment": null,
      "subTotal": 1306.76,
      "total": 1306.76,
      "tax": 0,
      "isTransient": false,
      "waitingPeriod": "30",
      "partnerName": "AHS.com",
      "completedDate": null,
      "contractNumber": null,
      "selectedPlan": "prod430102",
      "serviceFee": 125,
      "priorityCode": null,
      "paymentSchedule": "Monthly",
      "ordersCount": 0,
      "byos": [
        "prod430076",
        "prod430077",
        "prod430072",
        "prod430074",
        "prod430073",
        "prod430084",
        "prod430090",
        "prod430089",
        "prod430092",
        "prod430091",
        "prod430088",
        "prod430081",
        "prod430085",
        "prod430082",
        "prod430079",
        "prod430083",
        "prod430086",
        "prod430075"
      ],
      "addons": [
        "prod430096",
        "prod430095",
        "prod430094",
        "prod430093",
        "prod430099",
        "prod430100"
      ],
      "address": {
        "postalCode": "38120",
        "state": "TN",
        "address1": "5569 KINGS PT",
        "address2": null,
        "city": "MEMPHIS"
      },
      "propertyAttributes": {
        "footage": "under 5k",
        "homeAge": "41",
        "homeType": "Single Family Residence"
      },
      "email": "steve824@d.com",
      "addressStreet": "5569 KINGS PT",
      "addressUnit": null,
      "addressCity": "MEMPHIS",
      "addressState": "TN",
      "addressZip": "38120"
      } as Cart

      this.cart.next(data)
      return Observable.of(data)
    }
}
