export interface PriceMap {
    [index: number]: IdPlan
  }
  
  interface IdPlan {
    prod430101: PlanPrice
    prod430102: PlanPrice
    prod430103: PlanPrice
    prod430104: PlanPrice
  }
  
  interface PlanPrice {
    prodId: string
    tsf: string
    price: number
    addonPrices: {
      prod430096: number
      prod430095: number
      prod430094: number
      prod430093: number
      prod430099: number
      prod430098: number
      prod430100: number
    }
  }
  