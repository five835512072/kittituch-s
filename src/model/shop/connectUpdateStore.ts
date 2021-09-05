import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { STATUS } from "../../constant/enum"
import type {
  BodyUpdateStore,
  ResultShopCollectionAll,
} from "../../type"


dotenv.config()

export async function connectUpdateStore(bodyUpdateStore: BodyUpdateStore): Promise<string> {
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

    const shopResult: ResultShopCollectionAll =
      await storeCollection.findOne({ storeID: bodyUpdateStore.storeID })

    if (!shopResult) {
      return STATUS.INVALID_STORE_ID
    }
    const storeResult: ResultShopCollectionAll =
      await storeCollection.findOne({ name: bodyUpdateStore.name })

    if (shopResult.name !== bodyUpdateStore.name) {
      if (storeResult) {
        return STATUS.INVALID_SHOP_NAME
      }
    }

    const query = { storeID: bodyUpdateStore.storeID }
    const newValues = {
      $set:
      {
        name: bodyUpdateStore.name,
        description: bodyUpdateStore.description,
        phoneNumber: bodyUpdateStore.phoneNumber,
        address: bodyUpdateStore.address,
      }
    }
    const updateNewValues = await storeCollection.updateOne(query, newValues)

    if (updateNewValues.matchedCount === 1) {
      return STATUS.UPDATE_SUCCESS
    }

    return STATUS.ERROR
  } catch (error) {
    console.log(error)
    throw error

  }
}
