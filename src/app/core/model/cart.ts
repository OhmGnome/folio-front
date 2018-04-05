import { Address } from "./address";

export interface Cart {
  byoPrice: number
  id: string
  discount: number
  sessionConfirmationNumber: string
  partnerSalesSource: string
  eFulfillment: boolean
  subTotal: number
  total: number
  tax: number
  isTransient: boolean
  waitingPeriod: string
  partnerName: string
  completedDate: Date
  contractNumber: number
  selectedPlan: string
  serviceFee: number
  priorityCode: string
  paymentSchedule: string
  ordersCount: number
  byos: string[]
  addons: string[]
  address: Address
  propertyAttributes: {
    footage: string
    homeAge: string
    homeType: string
  }
  email: string
  addressStreet: string
  addressUnit: string
  addressCity: string
  addressState: string
  addressZip: string
}
