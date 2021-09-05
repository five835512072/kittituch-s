import type { Response, Request, NextFunction } from "express"
import { connectUpdateProduct } from "../../model/product/connectUpadteProduct"
import { STATUS } from "../../constant/enum"

export async function updateProduct(req: Request, res: Response): Promise<Response> {
  try {
    const updateProductStatus = await connectUpdateProduct(req.body)

    if (updateProductStatus !== STATUS.UPDATE_SUCCESS) {
      return res.status(200).json({status:updateProductStatus})
    }

    return res.status(201).json({status:updateProductStatus})
  } catch (error) {
    return res.status(502).json(error)
  }
}
