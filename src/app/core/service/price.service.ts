import { PriceMap } from './../model/priceMap';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { ConfigService } from './config.service'

@Injectable()
export class PriceService {
  prices: Observable<PriceMap>

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCache(): Observable<PriceMap> {
    if (!this.prices) {
      this.prices = this.get()
      return this.prices
    } else {
      return this.prices
    }
  }

  get(): Observable<PriceMap> {
    this.config.sleep(1000)
    let data = {
        "75": {
          "prod430101": {
            "prodId": "prod430101",
            "tsf": "75",
            "price": 611.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 191.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430102": {
            "prodId": "prod430102",
            "tsf": "75",
            "price": 839.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 215.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430103": {
            "prodId": "prod430103",
            "tsf": "75",
            "price": 779.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 239.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430104": {
            "prodId": "prod430104",
            "tsf": "75",
            "price": 539.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 167.88,
              "prod430098": 160,
              "prod430100": 85
            }
          }
        },
        "100": {
          "prod430101": {
            "prodId": "prod430101",
            "tsf": "100",
            "price": 515.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 155.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430102": {
            "prodId": "prod430102",
            "tsf": "100",
            "price": 695.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 179.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430103": {
            "prodId": "prod430103",
            "tsf": "100",
            "price": 659.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 203.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430104": {
            "prodId": "prod430104",
            "tsf": "100",
            "price": 443.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 131.88,
              "prod430098": 160,
              "prod430100": 85
            }
          }
        },
        "125": {
          "prod430101": {
            "prodId": "prod430101",
            "tsf": "125",
            "price": 455.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 143.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430102": {
            "prodId": "prod430102",
            "tsf": "125",
            "price": 635.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 155.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430103": {
            "prodId": "prod430103",
            "tsf": "125",
            "price": 599.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 179.88,
              "prod430098": 160,
              "prod430100": 85
            }
          },
          "prod430104": {
            "prodId": "prod430104",
            "tsf": "125",
            "price": 263.88,
            "addonPrices": {
              "prod430096": 160,
              "prod430095": 30,
              "prod430094": 80,
              "prod430093": 160,
              "prod430099": 83.88,
              "prod430098": 160,
              "prod430100": 85
            }
          }
        }
    } as PriceMap

    return Observable.of(data)
  }
}
