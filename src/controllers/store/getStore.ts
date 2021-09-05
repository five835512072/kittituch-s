import type { Response, Request, NextFunction } from "express"
import { connectGetStore } from "../../model/shop/connectgetstore"
import { STATUS } from "../../constant/enum"
import { body } from "express-validator"

export async function getStore(req: Request, res: Response): Promise<Response> {
  try {
    const storeId: string = String(req.query.storeID)
    return res
      .status(200)
      .json({ status: await connectGetStore(storeId) })

  } catch (error) {
    return res.status(502).json(error)
  }
}
