import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { STATUS } from "../../constant/enum"
import type {
  ResultProductCollectionAll,
} from "../../type"


dotenv.config()

export async function connectGetProduct(productID: string): Promise<string | ResultProductCollectionAll> {
  const client = await MongoClient.connect(
    process.env.MONGO_DB_CONNECT as string,
    { useUnifiedTopology: true }
  )

  if (!client) {
    return STATUS.CONNECT_DATABASE_ERROR
  }

  try {
    const db = client.db(process.env.DATABASE_NAME)
    const productCollection = db.collection(process.env.COLLECTION_PRODUCT as string)

    console.log(productID)

    const proiductResult: ResultProductCollectionAll =
      await productCollection.findOne({ productID: productID })
    client.close()

    console.log(proiductResult)
    if (!proiductResult) {
      return STATUS.INVALID_PRODUCT_ID
    }

    return proiductResult
  } catch (error) {
    throw error
  }
}
