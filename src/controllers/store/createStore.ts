import type { Response, Request } from "express"
import { connectCreateStore } from "../../model/connectCreateStore";

export async function createStore(req: Request, res: Response): Promise<Response>  {
  try {
    console.log('test')
    const x:any = await connectCreateStore(req.body)
    return res.status(200).json(req.body);

  } catch (error) {

    return res.status(500).json(error);
  }
}