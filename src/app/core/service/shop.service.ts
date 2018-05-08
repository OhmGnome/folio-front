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
  systemsCount = new BehaviorSubject<number>(0)
  appliancesCount = new BehaviorSubject<number>(0)
  byos = new BehaviorSubject<Byos>({} as Byos)
  priceModifier = new BehaviorSubject<number>(0)
  serviceFee = new BehaviorSubject<number>(0)
  serviceFees = new BehaviorSubject<number[]>([] as number[])
  address = new BehaviorSubject<Address>({} as Address) //can be update from cart or addressService
  printAddress = new BehaviorSubject<Address>({} as Address)
  byoPrice = new BehaviorSubject<number>(0)
  selectedPlan = new BehaviorSubject<Plan>({} as Plan)
  byosCount = new BehaviorSubject<number>(0)
  totalByos = new BehaviorSubject<number>(0)
  totalAddons = new BehaviorSubject<number>(0)
  total = new BehaviorSubject<string>('')
  footage = new BehaviorSubject<string>('')
  priorityCode = new BehaviorSubject<string>('')
  discount = new BehaviorSubject<number>(0)
  waitingPeriod = new BehaviorSubject<string>('')
  isWarrantyPurchasable = new BehaviorSubject<boolean>(false)
  isPromoValid = new BehaviorSubject<boolean>(false)
  isMobile = new BehaviorSubject<boolean>(false)

  //page scope vars
  quote: Quote

  constructor() {
    this.quote = {} as Quote
    this.quote.isNextPageTransition = new BehaviorSubject<boolean>(false)
    this.quote.byosCounterInit = new BehaviorSubject<boolean>(false)
    this.quote.byosCounterOffset = new BehaviorSubject<number>(0)
    this.quote.comboSavings = new BehaviorSubject<string>('')
    this.quote.isPriorityCodeDisplayed = new BehaviorSubject<boolean>(false)
    this.quote.isPromoFieldDisplayed = new BehaviorSubject<boolean>(false)
    this.quote.isCoveredItemsDisplay = new BehaviorSubject<boolean>(false)
  }
}
