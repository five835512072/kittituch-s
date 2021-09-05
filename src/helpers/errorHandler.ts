import type { Response, Request, NextFunction } from "express"


export async function errorHandler(req: Request, res: Response, next:NextFunction, error:any): Promise<Response> {
  try {

    console.log(error)
    return(error)


  } catch (error) {
    return res.status(500).json(error)
  }
}