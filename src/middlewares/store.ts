import { check } from "express-validator"

export const check_req_createstore = [
  check("name", "Invalid user name").notEmpty(),
  check("description", "Invalid project description").notEmpty(),
  check("phoneNumber", "Invalid phoneNumber").notEmpty(),
  check("phoneNumber", "Invalid phoneNumber").isLength({ min: 10, max:10 }),
  check("address", "Invalid address").notEmpty(),
]

export const check_req_updateestore = [
  check("storeID", "Invalid storeID").notEmpty(),
  check("name", "Invalid user name").notEmpty(),
  check("description", "Invalid project description").notEmpty(),
  check("phoneNumber", "Invalid phoneNumber").notEmpty(),
  check("phoneNumber", "Invalid phoneNumber").isLength({ min: 10, max:10 }),
  check("address", "Invalid address").notEmpty(),
]

export const check_req_getstore = [
  check("storeID", "Invalid storeID").notEmpty(),
]

export const check_req_createproduct= [
  check("storeID", "Invalid storeID").notEmpty(),
  check("name", "Invalid user name").notEmpty(),
  check("description", "Invalid project description").notEmpty(),
  check("price", "Invalid price").isInt({ min: 0}).notEmpty(),
  check("unit", "Invalid unit").isInt({ min: 0}).notEmpty(),
]

export const check_req_updateproduct= [
  check("productID", "Invalid storeID").notEmpty(),
  check("name", "Invalid user name").notEmpty(),
  check("description", "Invalid project description").notEmpty(),
  check("price", "Invalid price").isInt({ min: 0}).notEmpty(),
  check("unit", "Invalid unit").isInt({ min: 0}).notEmpty(),
]

export const check_req_deleteproduct = [
  check("productID", "Invalid productID").notEmpty(),
]
