import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Catalog } from './../model/product'
import { ConfigService } from './config.service'

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient, private config: ConfigService) { }
  catalog: Observable<Catalog>

  getCache(): Observable<Catalog> {
    if (!this.catalog) {
      this.catalog = this.get()
      return this.catalog
    } else {
      return this.catalog
    }
  }

  get(): Observable<Catalog> {
    this.config.sleep(500)

    let data = {
      "addons": {
        "prod430096": {
          "name": "Inground Spa Only",
          "prodId": "prod430096",
          "skuId": "sku400108"
        },
        "prod430095": {
          "name": "Septic System Pumping & Septic Sewage Ejector Pump",
          "prodId": "prod430095",
          "skuId": "sku400107"
        },
        "prod430094": {
          "name": "Inground Additional Spa",
          "prodId": "prod430094",
          "skuId": "sku400106"
        },
        "prod430093": {
          "name": "Pool Only",
          "prodId": "prod430093",
          "skuId": "sku400105"
        },
        "prod430099": {
          "name": "Guest Unit (Maximum square footage:750 sq ft)",
          "prodId": "prod430099",
          "skuId": "sku400111"
        },
        "prod430098": {
          "name": "Pool\/Inground Spa Equipment",
          "prodId": "prod430098",
          "skuId": "sku400110"
        },
        "prod430100": {
          "name": "Well Pump",
          "prodId": "prod430100",
          "skuId": "sku400112"
        }
      },
      "plans": {
        "prod430101": {
          "name": "Systems",
          "prodId": "prod430101",
          "skuId": "sku400113",
          "catId": "33afb3e8-57f1-4347-b577-9dfa10a08e23"
        },
        "prod430102": {
          "name": "Build Your Own",
          "prodId": "prod430102",
          "skuId": "sku400114",
          "catId": "3f142014-75f9-41a9-a65b-e7fde49d0882"
        },
        "prod430103": {
          "name": "Combo",
          "prodId": "prod430103",
          "skuId": "sku400115",
          "catId": "5d19b2cc-8d55-45b1-a86e-aebd7009124b"
        },
        "prod430104": {
          "name": "Appliances",
          "prodId": "prod430104",
          "skuId": "sku400116",
          "catId": "7cdd9ea6-3d4e-4f04-a107-8f0d90fa2873"
        }
      },
      "stock": [
        {
          "name": "Doorbells",
          "prodId": "prod10002",
          "isAppliance": false
        },
        {
          "name": "Instant Hot\/Cold Water Disp.",
          "prodId": "prod430079",
          "isAppliance": false
        },
        {
          "name": "Air Conditioning w\/Ductwork",
          "prodId": "prod430076",
          "isAppliance": false
        },
        {
          "name": "Water Heaters",
          "prodId": "prod430077",
          "isAppliance": false
        },
        {
          "name": "Plumbing incl.stoppages",
          "prodId": "prod430074",
          "isAppliance": false
        },
        {
          "name": "Smoke Detectors",
          "prodId": "prod430075",
          "isAppliance": false
        },
        {
          "name": "Heating w\/Ductwork",
          "prodId": "prod430072",
          "isAppliance": false
        },
        {
          "name": "Electrical",
          "prodId": "prod430073",
          "isAppliance": false
        },
        {
          "name": "Central Vacuums",
          "prodId": "prod430082",
          "isAppliance": false
        },
        {
          "name": "Garbage Disposals",
          "prodId": "prod430081",
          "isAppliance": false
        },
        {
          "name": "Ceiling Fans",
          "prodId": "prod10003",
          "isAppliance": false
        },
        {
          "name": "Redepartment",
          "prodId": "prod10004",
          "isAppliance": false
        },
        {
          "name": "Clothes Washers",
          "prodId": "prod430092",
          "isAppliance": true
        },
        {
          "name": "Dishwashers",
          "prodId": "prod430090",
          "isAppliance": true
        },
        {
          "name": "Ranges\/Ovens\/Cooktops",
          "prodId": "prod430091",
          "isAppliance": true
        },
        {
          "name": "Garage Door Openers",
          "prodId": "prod430086",
          "isAppliance": true
        },
        {
          "name": "Free-standing Ice Makers",
          "prodId": "prod430085",
          "isAppliance": true
        },
        {
          "name": "Built-in Food Centers",
          "prodId": "prod430084",
          "isAppliance": true
        },
        {
          "name": "Trash Compactors",
          "prodId": "prod430083",
          "isAppliance": true
        },
        {
          "name": "Refrigerators",
          "prodId": "prod430089",
          "isAppliance": true
        },
        {
          "name": "Clothes Dryers",
          "prodId": "prod430088",
          "isAppliance": true
        }
      ]
    } as Catalog

    return Observable.of(data)
  }

}
