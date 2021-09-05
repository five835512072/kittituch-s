import type { Response, Request } from "express"
import { connectGetAllProduct } from "../../model/product/connectGetAllProduct"

export async function getAllProduct(req: Request, res: Response): Promise<Response> {
  try {
    return res
      .status(200)
      .json({ status: await connectGetAllProduct() })

  } catch (error) {
    return res.status(500).json(error);
  }
}
