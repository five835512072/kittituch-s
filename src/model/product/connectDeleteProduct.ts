import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import { STATUS } from "../../constant/enum"
import type {
  BodyDeleteProduct,
} from "../../type"


dotenv.config()

export async function connectDeleteProduct(bodyDeleteProduct: BodyDeleteProduct): Promise<string> {
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
    
    const deleteResult =
      await productCollection.deleteOne({ productID:bodyDeleteProduct.productID })
    client.close()

    if (deleteResult.deletedCount === 1) {
      return STATUS.DELETE_SUCCESS
    }

    return STATUS.INVALID_PRODUCT_ID
  } catch (error) {
    throw error

  }
}
