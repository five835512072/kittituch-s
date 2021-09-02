import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { v4 as uuidv4 } from "uuid"


dotenv.config()

export async function connectCreateStore(bodyCreateStore: any) {
  const client = await MongoClient.connect(
    process.env.MONGO_DB_CONNECT as string,
  )
  console.log(bodyCreateStore)
  if (!client) {
    return ('connect database error')
  }

  try {

    const db = client.db(process.env.DATABASE_NAME)
    const storeCollection = db.collection(process.env.COLLECTION_STORE as string)

    const userResult: any = await storeCollection.insertOne({
      name: 'test001',
    })


  } catch (error) {


  }
}