import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { v4 as uuidv4 } from "uuid"
import { STATUS } from "../../constant/enum"
import type {
  BodyCreateShop,
  ResultShopCollectionAll,
} from "../../type"


dotenv.config()

export async function connectCreateStore(bodyCreateStore: BodyCreateShop): Promise<string> {
  const client = await MongoClient.connect(
    process.env.MONGO_DB_CONNECT as string,
    { useUnifiedTopology: true}
  )

  if (!client) {
    return STATUS.CONNECT_DATABASE_ERROR
  }

  try {
    const db = client.db(process.env.DATABASE_NAME)
    const storeCollection = db.collection(process.env.COLLECTION_STORE as string)
    const storeID: string = uuidv4()

    const shopResult: ResultShopCollectionAll = await storeCollection.findOne({ phoneNumber: bodyCreateStore.phoneNumber})

    await storeCollection.insertOne({
      storeID: storeID,
      name: bodyCreateStore.name,
      description: bodyCreateStore.description,
      phoneNumber: bodyCreateStore.phoneNumber,
      address: bodyCreateStore.address,
    })



    return STATUS.CREATE_SUCCESS
  } catch (error) {
    throw error

  }
}