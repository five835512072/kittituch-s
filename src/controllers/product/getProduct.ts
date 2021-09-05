import type { Response, Request, NextFunction } from "express"
import { connectGetProduct } from "../../model/product/connectGetProduct"

export async function getProduct(req: Request, res: Response): Promise<Response> {
  try {
    const productID: string = String(req.query.productID)
    return res
      .status(200)
      .json({ status: await connectGetProduct(productID) })

  } catch (error) {
    return res.status(502).json(error)
  }
}