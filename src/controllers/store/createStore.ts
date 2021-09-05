import type { Response, Request, NextFunction } from "express"
import { connectCreateStore } from "../../model/shop/connectCreateStore"
import { STATUS } from "../../constant/enum"

export async function createStore(req: Request, res: Response): Promise<Response> {
  try {
    const createStatus = await connectCreateStore(req.body)

    if (createStatus !== STATUS.CREATE_SUCCESS) {
      return res.status(200).json({status:createStatus})
    }

    return res.status(201).json({status:createStatus})
  } catch (error) {
    return res.status(502).json(error)
  }
}