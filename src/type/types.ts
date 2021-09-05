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

export type ResultProductCollectionAll = {
  _id: object
  storeID:string
  productID: string
  name: string
  description:string
  price:number
  unit:number
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

export type BodyUpadteProduct = {
  productID: string
  name: string
  description:string
  price:string
  unit:string
}

export type BodyDeleteProduct = {
  productID: string
}
