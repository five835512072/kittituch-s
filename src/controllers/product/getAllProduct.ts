import type { Response, Request } from "express"

export async function getAllProduct(req: Request, res: Response): Promise<Response>  {
  try {
    return res.status(200).json(req.query.test);

  } catch (error) {

    return res.status(500).json(error);
  }
}