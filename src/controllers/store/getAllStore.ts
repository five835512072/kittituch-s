import type { Response, Request, NextFunction } from "express"
import { connectGetAllStore } from "../../model/shop/connectGetAllStore"
import { STATUS } from "../../constant/enum"

export async function getaAlStore(req: Request, res: Response): Promise<Response> {
  try {
    return res
      .status(200)
      .json({ status: await connectGetAllStore() })

  } catch (error) {
    return res.status(502).json(error)
  }
}
