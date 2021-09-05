import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

export const check_errors = (
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  const errors = validationResult(req).formatWith(({ msg }) => msg)
  const hasError = !errors.isEmpty()

  if (hasError) {

    return res.status(422).json({ status: errors.array() })
  }

  next()
}
