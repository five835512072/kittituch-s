import type { Response, Request} from "express"
import { connectDeleteProduct } from "../../model/product/connectDeleteProduct"
import { STATUS } from "../../constant/enum"

export async function deleteProduct(req: Request, res: Response): Promise<Response> {
  try {
    const deleteStatus = await connectDeleteProduct(req.body)

    if (deleteStatus !== STATUS.DELETE_SUCCESS) {
      return res.status(200).json({status:deleteStatus})
    }

    return res.status(200).json({status:deleteStatus})
  } catch (error) {
    return res.status(502).json(error)
  }
}
