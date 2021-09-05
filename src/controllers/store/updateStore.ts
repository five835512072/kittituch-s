import type { Response, Request, NextFunction } from "express"
import { connectUpdateStore } from "../../model/shop/connectUpdateStore"
import { STATUS } from "../../constant/enum"

export async function updateStore(req: Request, res: Response): Promise<Response> {
  try {
    const updateStoreStatus = await connectUpdateStore(req.body)

    if (updateStoreStatus !== STATUS.UPDATE_SUCCESS) {
      return res.status(200).json({status:updateStoreStatus})
    }

    return res.status(201).json({status:updateStoreStatus})
  } catch (error) {
    return res.status(502).json(error)
  }
}
