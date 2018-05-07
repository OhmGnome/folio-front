import { Address } from "./address";

interface Product {
    prodId: string
    skuId?: string
    name: string
    selected?: boolean
    price?: number
}

 //TODO
export interface Plans {
    [index: string]: Plan
}

export interface Plan extends Product {
    nameLong?: string
    description?: string
    catId: string
    key?: string
}

export interface Addon extends Product{
    hasModalDescriptor?: boolean
    disabled?: boolean
}

export interface Byo extends Product {
    isPick10?: boolean
    isAppliance?: boolean
}

export class Byos {
    prod430076: Byo
    prod430077: Byo
    prod430072: Byo
    prod430074: Byo
    prod430073: Byo
    prod430084: Byo
    prod430090: Byo
    prod430087: Byo
    prod430089: Byo
    prod430092: Byo
    prod430091: Byo
    prod430088: Byo
    prod430081: Byo
    prod430080: Byo
    prod430085: Byo
    prod430082: Byo
    prod430079: Byo
    prod430078: Byo
    prod430083: Byo
    prod430086: Byo
    prod430075: Byo
}

export interface Addons{
    [index: string]: Addon
}

export interface Catalog {
    addons: Addons
    plans: Plans
    stock: Byo[]
}



// "addons": {
//       "prod430096": {
//         "name": "Inground Spa Only",
//         "prodId": "prod430096",
//         "skuId": "sku400108",
//         "selected": true,
//         "disabled": false
//       },
//       "prod430095": {
//         "name": "Septic Pump",
//         "prodId": "prod430095",
//         "skuId": "sku400107",
//         "selected": true,
//         "hasModalDescriptor": true
//       },
//       "prod430094": {
//         "name": "Additional Inground Spa",
//         "prodId": "prod430094",
//         "skuId": "sku400106",
//         "selected": true,
//         "disabled": false
//       },
//       "prod430093": {
//         "name": "Pool Only",
//         "prodId": "prod430093",
//         "skuId": "sku400105",
//         "selected": true,
//         "disabled": false
//       },
//       "prod430099": {
//         "name": "Guest Unit ",
//         "prodId": "prod430099",
//         "skuId": "sku400111",
//         "selected": true,
//         "disabled": false
//       },
//       "prod430098": {
//         "name": "Pool and Inground Spa Equipment",
//         "prodId": "prod430098",
//         "skuId": "sku400110",
//         "hasModalDescriptor": true,
//         "disabled": true,
//         "selected": false
//       },
//       "prod430100": {
//         "name": "Well Pump",
//         "prodId": "prod430100",
//         "skuId": "sku400112",
//         "selected": true,
//         "hasModalDescriptor": true
//     //   }
//     },
    // "plans": {
    //   "systems": {
    //     "name": "Systems",
    //     "prodId": "prod430101",
    //     "skuId": "sku400113",
    //     "catId": "33afb3e8-57f1-4347-b577-9dfa10a08e23",
    //     "key": "systems",
    //     "price": 37.99
    //   },
    //   "buildyourown": {
    //     "name": "Build Your Own",
    //     "prodId": "prod430102",
    //     "skuId": "sku400114",
    //     "catId": "3f142014-75f9-41a9-a65b-e7fde49d0882",
    //     "key": "buildyourown",
    //     "price": 52.99
    //   },
    //   "combo": {
    //     "name": "Combo",
    //     "prodId": "prod430103",
    //     "skuId": "sku400115",
    //     "catId": "5d19b2cc-8d55-45b1-a86e-aebd7009124b",
    //     "key": "combo",
    //     "price": 49.99
    //   },
    //   "appliances": {
    //     "name": "Appliances",
    //     "prodId": "prod430104",
    //     "skuId": "sku400116",
    //     "catId": "7cdd9ea6-3d4e-4f04-a107-8f0d90fa2873",
    //     "key": "appliances",
    //     "price": 21.99
    //   }
    // },
    // "stock": [
    //   {
    //     "name": "Doorbells",
    //     "prodId": "prod10002",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Instant Hot\/Cold Water Disp.",
    //     "prodId": "prod430079",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Air Conditioning w\/Ductwork",
    //     "prodId": "prod430076",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Water Heaters",
    //     "prodId": "prod430077",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Plumbing incl.stoppages",
    //     "prodId": "prod430074",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Smoke Detectors",
    //     "prodId": "prod430075",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Heating w\/Ductwork",
    //     "prodId": "prod430072",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Electrical",
    //     "prodId": "prod430073",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Central Vacuums",
    //     "prodId": "prod430082",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Garbage Disposals",
    //     "prodId": "prod430081",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Ceiling Fans",
    //     "prodId": "prod10003",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Redepartment",
    //     "prodId": "prod10004",
    //     "isAppliance": false
    //   },
    //   {
    //     "name": "Clothes Washers",
    //     "prodId": "prod430092",
    //     "isAppliance": true
    //   },
    //   {
    //     "name": "Dishwashers",
    //     "prodId": "prod430090",
    //     "isAppliance": true
    //   },
    //   {
    //     "name": "Ranges\/Ovens\/Cooktops",
    //     "prodId": "prod430091",
    //     "isAppliance": true
    //   },
    //   {
    //     "name": "Garage Door Openers",
    //     "prodId": "prod430086",
    //     "isAppliance": true
    //   },
    //   {
    //     "name": "Free-standing Ice Makers",
    //     "prodId": "prod430085",
    //     "isAppliance": true
    //   },
    //   {
    //     "name": "Built-in Food Centers",
    //     "prodId": "prod430084",
    //     "isAppliance": true
    //   },
    //   {
    //     "name": "Trash Compactors",
    //     "prodId": "prod430083",
    //     "isAppliance": true
    //   },
    //   {
    //     "name": "Refrigerators",
    //     "prodId": "prod430089",
    //     "isAppliance": true
    //   },
    //   {
    //     "name": "Clothes Dryers",
    //     "prodId": "prod430088",
    //     "isAppliance": true
    //   }
    // ],
    // "systemsCount": 12,
    // "appliancesCount": 9,
    // "includes": {
    //   "0": {
    //     "name": "Doorbells",
    //     "prodId": "prod10002",
    //     "isAppliance": false
    //   },
    //   "1": {
    //     "name": "Instant Hot\/Cold Water Disp.",
    //     "prodId": "prod430079",
    //     "isAppliance": false
    //   },
    //   "2": {
    //     "name": "Air Conditioning w\/Ductwork",
    //     "prodId": "prod430076",
    //     "isAppliance": false
    //   },
    //   "3": {
    //     "name": "Water Heaters",
    //     "prodId": "prod430077",
    //     "isAppliance": false
    //   },
    //   "4": {
    //     "name": "Plumbing incl.stoppages",
    //     "prodId": "prod430074",
    //     "isAppliance": false
    //   },
    //   "5": {
    //     "name": "Smoke Detectors",
    //     "prodId": "prod430075",
    //     "isAppliance": false
    //   },
    //   "6": {
    //     "name": "Heating w\/Ductwork",
    //     "prodId": "prod430072",
    //     "isAppliance": false
    //   },
    //   "7": {
    //     "name": "Electrical",
    //     "prodId": "prod430073",
    //     "isAppliance": false
    //   },
    //   "8": {
    //     "name": "Central Vacuums",
    //     "prodId": "prod430082",
    //     "isAppliance": false
    //   },
    //   "9": {
    //     "name": "Garbage Disposals",
    //     "prodId": "prod430081",
    //     "isAppliance": false
    //   },
    //   "10": {
    //     "name": "Ceiling Fans",
    //     "prodId": "prod10003",
    //     "isAppliance": false
    //   },
    //   "11": {
    //     "name": "Redepartment",
    //     "prodId": "prod10004",
    //     "isAppliance": false
    //   },
    //   "12": {
    //     "name": "Clothes Washers",
    //     "prodId": "prod430092",
    //     "isAppliance": true
    //   },
    //   "13": {
    //     "name": "Dishwashers",
    //     "prodId": "prod430090",
    //     "isAppliance": true
    //   },
    //   "14": {
    //     "name": "Ranges\/Ovens\/Cooktops",
    //     "prodId": "prod430091",
    //     "isAppliance": true
    //   },
    //   "15": {
    //     "name": "Garage Door Openers",
    //     "prodId": "prod430086",
    //     "isAppliance": true
    //   },
    //   "16": {
    //     "name": "Free-standing Ice Makers",
    //     "prodId": "prod430085",
    //     "isAppliance": true
    //   },
    //   "17": {
    //     "name": "Built-in Food Centers",
    //     "prodId": "prod430084",
    //     "isAppliance": true
    //   },
    //   "18": {
    //     "name": "Trash Compactors",
    //     "prodId": "prod430083",
    //     "isAppliance": true
    //   },
    //   "19": {
    //     "name": "Refrigerators",
    //     "prodId": "prod430089",
    //     "isAppliance": true
    //   },
    //   "20": {
    //     "name": "Clothes Dryers",
    //     "prodId": "prod430088",
    //     "isAppliance": true
    //   }
    // },
//     "addonKeys": [
//       "prod430096",
//       "prod430095",
//       "prod430094",
//       "prod430093",
//       "prod430099",
//       "prod430098",
//       "prod430100"
//     ],
//     "byoKeys": [
//       "prod10002",
//       "prod430079",
//       "prod430076",
//       "prod430077",
//       "prod430074",
//       "prod430075",
//       "prod430072",
//       "prod430073",
//       "prod430082",
//       "prod430081",
//       "prod10003",
//       "prod10004",
//       "prod430092",
//       "prod430090",
//       "prod430091",
//       "prod430086",
//       "prod430085",
//       "prod430084",
//       "prod430083",
//       "prod430089",
//       "prod430088"
//     ],
//     "byos": {
//       "prod10002": {
//         "isAppliance": false,
//         "name": "Doorbells",
//         "prodId": "prod10002"
//       },
//       "prod430079": {
//         "isAppliance": false,
//         "name": "Instant Hot\/Cold Water Disp.",
//         "prodId": "prod430079",
//         "selected": true
//       },
//       "prod430076": {
//         "isAppliance": false,
//         "name": "Air Conditioning w\/Ductwork",
//         "prodId": "prod430076",
//         "selected": true
//       },
//       "prod430077": {
//         "isAppliance": false,
//         "name": "Water Heaters",
//         "prodId": "prod430077",
//         "selected": true
//       },
//       "prod430074": {
//         "isAppliance": false,
//         "name": "Plumbing incl.stoppages",
//         "prodId": "prod430074",
//         "selected": true
//       },
//       "prod430075": {
//         "isAppliance": false,
//         "name": "Smoke Detectors",
//         "prodId": "prod430075",
//         "selected": true
//       },
//       "prod430072": {
//         "isAppliance": false,
//         "name": "Heating w\/Ductwork",
//         "prodId": "prod430072",
//         "selected": true
//       },
//       "prod430073": {
//         "isAppliance": false,
//         "name": "Electrical",
//         "prodId": "prod430073",
//         "selected": true
//       },
//       "prod430082": {
//         "isAppliance": false,
//         "name": "Central Vacuums",
//         "prodId": "prod430082",
//         "selected": true
//       },
//       "prod430081": {
//         "isAppliance": false,
//         "name": "Garbage Disposals",
//         "prodId": "prod430081",
//         "selected": true
//       },
//       "prod10003": {
//         "isAppliance": false,
//         "name": "Ceiling Fans",
//         "prodId": "prod10003"
//       },
//       "prod10004": {
//         "isAppliance": false,
//         "name": "Redepartment",
//         "prodId": "prod10004"
//       },
//       "prod430092": {
//         "isAppliance": true,
//         "name": "Clothes Washers",
//         "prodId": "prod430092",
//         "selected": true
//       },
//       "prod430090": {
//         "isAppliance": true,
//         "name": "Dishwashers",
//         "prodId": "prod430090",
//         "selected": true
//       },
//       "prod430091": {
//         "isAppliance": true,
//         "name": "Ranges\/Ovens\/Cooktops",
//         "prodId": "prod430091",
//         "selected": true
//       },
//       "prod430086": {
//         "isAppliance": true,
//         "name": "Garage Door Openers",
//         "prodId": "prod430086",
//         "selected": true
//       },
//       "prod430085": {
//         "isAppliance": true,
//         "name": "Free-standing Ice Makers",
//         "prodId": "prod430085",
//         "selected": true
//       },
//       "prod430084": {
//         "isAppliance": true,
//         "name": "Built-in Food Centers",
//         "prodId": "prod430084",
//         "selected": true
//       },
//       "prod430083": {
//         "isAppliance": true,
//         "name": "Trash Compactors",
//         "prodId": "prod430083",
//         "selected": true
//       },
//       "prod430089": {
//         "isAppliance": true,
//         "name": "Refrigerators",
//         "prodId": "prod430089",
//         "selected": true
//       },
//       "prod430088": {
//         "isAppliance": true,
//         "name": "Clothes Dryers",
//         "prodId": "prod430088",
//         "selected": true
//       }
//     },
//     "priceModifier": 12,
//     "serviceFee": 125,
//     "address": {
//       "postalCode": "38120",
//       "state": "TN",
//       "address1": "5569 KINGS PT",
//       "address2": null,
//       "city": "MEMPHIS"
//     },
//     "printAddress": {
//       "postalCode": "38120",
//       "state": "TN",
//       "address1": "5569 KINGS PT",
//       "address2": null,
//       "city": "MEMPHIS"
//     },
//     "byoPrice": 2,
//     "selectedPlan": {
//       "name": "Build Your Own",
//       "prodId": "prod430102",
//       "skuId": "sku400114",
//       "catId": "3f142014-75f9-41a9-a65b-e7fde49d0882",
//       "key": "buildyourown",
//       "price": 52.99
//     },
//     "byosCount": null,
//     "totalByos": 0,
//     "totalAddons": null,
//     "footage": "under 5k"
//   }