import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { Address } from '../model/address'
import { Byos } from '../model/product'
import { Quote } from '../model/quote'
import { Addons, Byo, Plan, Plans } from './../model/product'

@Injectable()
export class ShopService {

  //application scope vars
  addons = new BehaviorSubject<Addons>({} as Addons)
  plans = new BehaviorSubject<Plans>({} as Plans)
  stock = new BehaviorSubject<Byo[]>([] as Byo[])
  includes = new BehaviorSubject<Byo[]>([] as Byo[])
  systemsCount = new BehaviorSubject<number>({} as number)
  appliancesCount = new BehaviorSubject<number>({} as number)
  byos = new BehaviorSubject<Byos>({} as Byos)
  priceModifier = new BehaviorSubject<number>({} as number)
  serviceFee = new BehaviorSubject<number>({} as number)
  serviceFees = new BehaviorSubject<number[]>([] as number[])
  address = new BehaviorSubject<Address>({} as Address) //can be update from cart or addressService
  printAddress = new BehaviorSubject<Address>({} as Address)
  byoPrice = new BehaviorSubject<number>({} as number)
  selectedPlan = new BehaviorSubject<Plan>({} as Plan)
  byosCount = new BehaviorSubject<number>({} as number)
  totalByos = new BehaviorSubject<number>({} as number)
  totalAddons = new BehaviorSubject<number>({} as number)
  total = new BehaviorSubject<number>({} as number)
  footage = new BehaviorSubject<string>({} as string)
  priorityCode = new BehaviorSubject<string>({} as string)
  discount = new BehaviorSubject<number>({} as number)
  waitingPeriod = new BehaviorSubject<string>({} as string)
  isWarrantyPurchasable = new BehaviorSubject<boolean>({} as boolean)
  isPromoValid = new BehaviorSubject<boolean>({} as boolean)
  isMobile = new BehaviorSubject<boolean>({} as boolean)

  //page scope vars
  quote: Quote

  constructor() {
    this.quote = {} as Quote
    this.quote.isNextPageTransition = new BehaviorSubject<boolean>({} as boolean)
    this.quote.byosCounterInit = new BehaviorSubject<boolean>({} as boolean)
    this.quote.byosCounterOffset = new BehaviorSubject<number>({} as number)
    this.quote.comboSavings = new BehaviorSubject<string>({} as string)
    this.quote.isPriorityCodeDisplayed = new BehaviorSubject<boolean>({} as boolean)
    this.quote.isPromoFieldDisplayed = new BehaviorSubject<boolean>({} as boolean)
    this.quote.isCoveredItemsDisplay = new BehaviorSubject<boolean>({} as boolean)
  }
}
