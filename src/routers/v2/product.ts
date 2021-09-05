import express from "express"
import { getAllProduct } from "../../controllers/product/getAllProduct"
import { createProduct } from "../../controllers/product/createProduct"
import { updateProduct } from "../../controllers/product/updateProduct"
import { check_errors } from "../../middlewares/common"
import {
  check_req_createproduct,
  check_req_updateproduct,
} from "../../middlewares/store"

const router = express.Router()

router.get(
  "/getallproduct",
  getAllProduct,
)

router.post(
  "/createproduct",
  check_req_createproduct,
  check_errors,
  createProduct,
)

router.patch(
  "/updateproduct",
  check_req_updateproduct,
  check_errors,
  updateProduct,
)

export default router
