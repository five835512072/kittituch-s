import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { STATUS } from "../../constant/enum"
import type {
  ResultShopCollectionAll,
} from "../../type"


dotenv.config()

export async function connectGetAllStore(): Promise<string|ResultShopCollectionAll[]> {
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
    
    const shopResult: ResultShopCollectionAll[] =
    await storeCollection.find({ }).toArray()
    client.close()

    return shopResult
  } catch (error) {
    console.log(error)
    throw error

  }
}
