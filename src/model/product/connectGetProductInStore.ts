import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { STATUS } from "../../constant/enum"
import type {
  ResultProductCollectionAll,
  ResultShopCollectionAll,
} from "../../type"


dotenv.config()

export async function connectGetProductInStore(storeID: string): Promise<string | ResultProductCollectionAll[]> {
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
    const storeCollection = db.collection(process.env.COLLECTION_STORE as string)

    const storeResult: ResultShopCollectionAll =
      await storeCollection.findOne({ storeID: storeID })

    if (!storeResult) {
      client.close()
      return STATUS.INVALID_STORE_ID
    }

    const proiductResult: ResultProductCollectionAll[] =
      await productCollection.find({ storeID: storeID }).toArray()
    client.close()

    return proiductResult
  } catch (error) {
    console.log(error)
    throw error
  }
}
