import { Cart } from './model/cart'
import { BYO, over10k, promoEligibilityError, under5k } from './model/constant'
import { PriceMap } from './model/priceMap'
import { Catalog, Plans, Byo } from './model/product'
import { Promo } from './model/promo'
import { ShopService } from './service/shop.service'

//functions specific to the shop ( client side cart) 

export function setPricesByPlan(shop: ShopService, prices: PriceMap): void {
  Object.keys(shop.plans.value).forEach(name => {
    shop.plans.value[name].price = (prices[shop.serviceFee.value][shop.plans.value[name].prodId].price / shop.priceModifier.value) || 0
  })
}

export function setPricesByServiceFee(shop: ShopService, prices: PriceMap): void {
  setPricesByPlan(shop, prices)
  setAddonPrices(shop, prices)
}

export function setAddonPrices(shop: ShopService, prices: PriceMap): void {
  Object.keys(shop.addons.value).forEach(function (key) {
    var addon = shop.addons.value[key]
    addon.price = prices[shop.serviceFee.value][shop.selectedPlan.value.prodId].addonPrices[addon.prodId] / shop.priceModifier.value
  })
  updateTotal.addons(shop)
}

export function updateByoCount(byo: Byo, shop: ShopService) {
  let i
  let count = shop.byosCount.value
  let byoKeys = Object.keys(shop.byos.value)

  byo.selected = byo.selected ? false : true

  if (byo.selected) {
    shop.byosCount.next(++count)
    if (shop.byosCount.value > 10) {
      byo.price = shop.byoPrice.value
      updateTotal.byos(shop)
    }
  } else {
    shop.byosCount.next(--count)
    if (shop.byosCount.value > 9) {
      if (!byo.price) {
        for (i = 0; i < byoKeys.length; i++) {
          if (shop.byos.value[byoKeys[i]].price) {
            shop.byos.value[byoKeys[i]].price = null
            break
          }
        }
      }
      updateTotal.byos(shop)
    }
    byo.price = null
  }

  shop.isWarrantyPurchasable.next(isWarrantyPurchasable(shop))
}

export const updateTotal = {
  addons: function (shop: ShopService): void {
    let total = 0
    Object.keys(shop.addons.value).forEach(function (key) {
      if (shop.addons.value[key].selected) {
        total += shop.addons.value[key].price
      }
    })
    shop.totalAddons.next(total)
  },

  byos: function (shop: ShopService): void {
    let total = 0
    Object.keys(shop.byos.value).forEach(function (key) {
      if (shop.byos.value[key].selected) {
        if (shop.byos.value[key].price) {
          total += shop.byos.value[key].price
        }
      }
    })
    shop.totalByos.next(total)
  }
}

export function isWarrantyPurchasable(shop: ShopService): boolean {
  if (!shop || !shop.selectedPlan.value) return false
  if (shop.footage.value === over10k)
    return false

  if ((shop.selectedPlan.value.key === BYO && shop.byosCount.value < 10)) {
    return false
  } else {
    return true
  }
}

export const addonIds = {
  pool: 'prod430093',
  spa: 'prod430096',
  poolSpa: 'prod430098',
  spa2: 'prod430094',
  guest: 'prod430099',
  pump: 'prod430095',
  well: 'prod430100'
}

export const poolIds = ['prod430093', 'prod430096', 'prod430098', 'prod430094']

export const serviceFeeMinPlanPrices = { '75': 46, '100': 39, '125': 30 }

export function formatName(name): string {
  return name.toLowerCase().replace(/ /gi, '')
}

export function setShopFromCart(shop: ShopService, cart: Cart): void {
  console.log('setShopFromCart')

  shop.serviceFee.next(cart.serviceFee)

  shop.address.next({ ...cart.address })
  shop.printAddress.next({ ...cart.address })

  shop.waitingPeriod.next(cart.waitingPeriod)
  
  shop.byoPrice.next(cart.byoPrice / shop.priceModifier.value)

  shop.selectedPlan.next(Object.values(shop.plans.value).find(plan => plan.prodId === cart.selectedPlan))

  cart.addons.forEach(function (key) {
    if (shop.addons.value[key]) {
      shop.addons.value[key].selected = true
    } else {
      console.log('error: addons data mismatch')
      console.log(cart.addons)
    }
  })
  shop.addons.value[addonIds.poolSpa].hasModalDescriptor = true
  shop.addons.value[addonIds.well].hasModalDescriptor = true
  shop.addons.value[addonIds.pump].hasModalDescriptor = true
  shop.addons.value[addonIds.guest].name = shop.addons.value[addonIds.guest].name.split('(')[0]
  shop.addons.value[addonIds.pump].name = 'Septic Pump'
  shop.addons.value[addonIds.poolSpa].name = 'Pool and Inground Spa Equipment'
  shop.addons.value[addonIds.spa2].name = 'Additional Inground Spa'
  validateAddons(shop)
  shop.footage.next(cart.propertyAttributes.footage)
  checkHomeFootage(shop)
  shop.addons.next(shop.addons.value)

  if (shop.selectedPlan.value.key === BYO) {
    let byos = shop.byos.value
    let count = 0
    cart.byos.forEach(function (key) {
      if (byos[key]) {
        byos[key].selected = true
        ++count
        if (count > 10) {
          byos[key].price = shop.byoPrice.value
        }
      } else {
        console.log('error: byos data mismatch')
        console.log(cart.byos, key)
      }
    })
    shop.byosCount.next(count)
    shop.byos.next(byos)
    updateTotal.byos(shop)
  }
}

export function validateAddons(shop: ShopService): void {
  var pool = shop.addons.value[addonIds.pool]
  var spa = shop.addons.value[addonIds.spa]
  var poolSpa = shop.addons.value[addonIds.poolSpa]
  var spa2 = shop.addons.value[addonIds.spa2]

  // handle Spa2
  if (!spa2.selected) {
    if (spa.selected || poolSpa.selected) {
      spa2.disabled = false
    } else {
      spa2.selected = false
      spa2.disabled = true
    }
  } else if (!spa.selected && !poolSpa.selected) {
    spa2.selected = false
    spa2.disabled = true
  } else if (spa.selected || poolSpa.selected) {
    spa2.disabled = false
  }

  // handle spa pool poolSpa
  if (poolSpa.selected) {
    pool.disabled = true
    pool.selected = false
    spa.disabled = true
    spa.selected = false
  } else {
    pool.disabled = false
    spa.disabled = false
  }

  if (pool.selected || spa.selected) {
    poolSpa.disabled = true
    poolSpa.selected = false
  } else {
    poolSpa.disabled = false
  }

  updateTotal.addons(shop)
}

//TODO refactor jsp
export function checkHomeFootage(shop: ShopService): void {
  console.log('vm.checkHomeFootage')
  if (shop.footage.value) {
    if (shop.footage.value !== under5k) {
      shop.addons.value[addonIds.guest].selected = false
      shop.addons.value[addonIds.guest].disabled = true
    } else {
      shop.addons.value[addonIds.guest].disabled = false
    }
    updateTotal.addons(shop)
  } else {
    console.log('Error failed to get footage')
  }
}

export function isPlanSelected(shop: ShopService, plan: string): boolean {
  if (shop.selectedPlan.value && shop.selectedPlan.value.key === plan) {
    return true
  } else {
    return false
  }
}

export function preserveShopSelections(shop: ShopService, shopGhost: ShopService): void {
  shop.plans.next(preserveSelections(shop.plans.value, shopGhost.plans.value))
  shop.addons.next(preserveSelections(shop.addons.value, shopGhost.addons.value))
  shop.byos.next(preserveSelections(shop.byos.value, shopGhost.byos.value))
}

export function preserveSelections(o: any, og: any): any {
  let temp = Object.assign({}, o)
  Object.values(og).forEach((k: any) => temp[k.key].selected = k.selected ? true : false)
  return temp
}

export function isPromoValid(shop: ShopService, promo: Promo): boolean {
  //		 console.log('isPromoValid')
  let isPromoValid = false
  let states = ['AK', 'IA', 'NY']

  if (shop && shop.footage.value === under5k && !states.includes(shop.address.value.state)) {
    if (promo.eligibleRules) {
      if (promo.eligibleRules.serviceFee) {
        promo.eligibleRules.serviceFee.forEach(function (serviceFee) {
          if (Math.floor(parseInt(serviceFee)) === shop.serviceFee.value) {
            if (promo.eligibleRules.SKUID) {
              promo.eligibleRules.SKUID.forEach(function (sku) {
                if (sku === shop.selectedPlan.value.skuId) {
                  isPromoValid = true
                  promo.message.priorityCodeError = ''
                }
              })
              if (isPromoValid) promo.message.priorityCodeError = ''
              else promo.message.priorityCodeError = promoEligibilityError
            }
          }
        })
      }
      return isPromoValid
    }
  } else {
    return false
  }
}

export function decompressCatalog(shop: ShopService, catalog: Catalog): void {
  //TODO move to backend
  let plansByName = {} as Plans
  Object.keys(catalog.plans).forEach(key => {
    let plan = catalog.plans[key]
    if (!plan) {
      console.log('error no result found for inventory.plans[' + key + ']')
      return
    }

    let name = formatName(plan.name)

    plan.key = name
    plansByName[name] = plan
  })
  shop.plans.next(plansByName)

  shop.addons.next(catalog.addons)

  shop.stock.next([...catalog.stock])
  shop.includes.next([...catalog.stock])

  let systemsCount = 0
  let appliancesCount = 0
  catalog.stock.forEach(byo => {
    // TODO set isPick10 from backend

    // if (Object.keys(data.byos).includes(byo.prodId)){
    // data.byos[byo.prodId] = data.byos[byo.prodId] ? data.byos[byo.prodId] : {}
    // data.byos[byo.prodId].isPick10 = true
    // }else{
    shop.byos.value[byo.prodId] = {}
    // data.byos[byo.prodId].isPick10 = false
    // }
    shop.byos.value[byo.prodId].isPick10 = true
    shop.byos.value[byo.prodId].isAppliance = byo.isAppliance
    shop.byos.value[byo.prodId].name = byo.name
    shop.byos.value[byo.prodId].prodId = byo.prodId
    if (byo.isAppliance) appliancesCount++
  })
  shop.systemsCount.next(shop.stock.value.length - appliancesCount)
  shop.appliancesCount.next(appliancesCount)

  shop.priceModifier.next(12)
}