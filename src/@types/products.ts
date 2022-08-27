export type ProductType = {
  productRef: string
  picture: string
  title: string
  price: number
  totalPrice: number
  quantity: number
}

type ProductSummaryInfo = {
  product_name: string
  price_uinity: number
  quantity: number
  total_price: number
}

export type SummaryType = {
  totalPriceEveryItem: number
  deliveryPrice: number
  paymentOption: string
  products_info: ProductSummaryInfo[]
  delivery_info: Inputs
  total: number
}

export type PaymentOption = {
  id: number
  option: string
}

export interface Inputs {
  eircode: string
  address: string
  apt: string
  city: string
  county: string
}
