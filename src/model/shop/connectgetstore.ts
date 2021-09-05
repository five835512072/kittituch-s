import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { STATUS } from "../../constant/enum"
import type {
  ResultShopCollectionAll,
} from "../../type"


dotenv.config()

export async function connectGetStore(storeID: string): Promise<string | ResultShopCollectionAll> {
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

    const storeResult: ResultShopCollectionAll =
      await storeCollection.findOne({ storeID:storeID })
    client.close()

    if (!storeResult) {
      return STATUS.INVALID_STORE_ID
    }

    return storeResult
  } catch (error) {
    throw error
  }
}
