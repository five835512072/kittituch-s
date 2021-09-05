import type { Response, Request, NextFunction } from "express"
import { connectCreateProduct } from "../../model/product/connectCreateProduct"
import { STATUS } from "../../constant/enum"

export async function createProduct(req: Request, res: Response): Promise<Response> {
  try {
    const createStatus = await connectCreateProduct(req.body)

    if (createStatus !== STATUS.CREATE_SUCCESS) {
      return res.status(200).json({status:createStatus})
    }

    return res.status(201).json({status:createStatus})
  } catch (error) {
    return res.status(502).json(error)
  }
}
