import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { STATUS } from "../../constant/enum"
import type {
  BodyUpadteProduct,
  ResultProductCollectionAll,
} from "../../type"


dotenv.config()

export async function connectUpdateProduct(bodyUpdateProduct: BodyUpadteProduct): Promise<string> {
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


    const query = { productID: bodyUpdateProduct.productID }
    const newValues = {
      $set:
      {
        name: bodyUpdateProduct.name,
        description: bodyUpdateProduct.description,
        price: parseInt(bodyUpdateProduct.price, 10),
        unit: parseInt(bodyUpdateProduct.unit, 10),
      }
    }
    const updateNewValues = await productCollection.updateOne(query, newValues)

    if (updateNewValues.matchedCount === 1) {
      return STATUS.UPDATE_SUCCESS
    }

    return STATUS.INVALID_PRODUCT_ID
  } catch (error) {
    console.log(error)
    throw error

  }
}
