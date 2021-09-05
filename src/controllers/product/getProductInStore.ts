import type { Response, Request, NextFunction } from "express"
import { connectGetProductInStore } from "../../model/product/connectGetProductInStore"

export async function getProductInStore(req: Request, res: Response): Promise<Response> {
  try {
    const storeID: string = String(req.query.storeID)
    return res
      .status(200)
      .json({ status: await connectGetProductInStore(storeID) })

  } catch (error) {
    return res.status(502).json(error)
  }
}