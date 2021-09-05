export type BodyCreateShop = {
  name: string
  description:string
  phoneNumber:number
  address:string
}

export type BodyUpdateStore = {
  storeID: string
  name: string
  description:string
  phoneNumber:number
  address:string
}

export type ResultShopCollectionAll = {
  _id: object
  storeID:string
  name: string
  description:string
  phoneNumber:number
  address:string
}

export type BodyProduct = {
  storeID: string
  name: string
  description:string
  price:string
  unit:string
}
