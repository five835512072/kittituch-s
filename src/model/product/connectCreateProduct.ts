import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { v4 as uuidv4 } from "uuid"
import { STATUS } from "../../constant/enum"
import type {
  BodyProduct,
  ResultShopCollectionAll,
} from "../../type"


dotenv.config()

export async function connectCreateProduct(bodyCreateProduct: BodyProduct): Promise<string> {
  const client = await MongoClient.connect(
    process.env.MONGO_DB_CONNECT as string,
    { useUnifiedTopology: true }
  )

  if (!client) {
    return STATUS.CONNECT_DATABASE_ERROR
  }

  try {
    const db = client.db(process.env.DATABASE_NAME)
    const storeCollection = db.collection(process.env.COLLECTION_STORE as string)
    const productCollection = db.collection(process.env.COLLECTION_PRODUCT as string)
    const productID: string = uuidv4()

    const shopResult: ResultShopCollectionAll =
      await storeCollection.findOne({ storeID: bodyCreateProduct.storeID })

    if (!shopResult) {
      return STATUS.INVALID_STORE_ID
    }

    await productCollection.insertOne({
      storeID: bodyCreateProduct.storeID,
      productID: productID,
      name: bodyCreateProduct.name,
      description: bodyCreateProduct.description,
      price: parseInt(bodyCreateProduct.price, 10),
      unit: parseInt(bodyCreateProduct.unit, 10),
    })

    return STATUS.CREATE_SUCCESS
  } catch (error) {
    throw error
  }
}
