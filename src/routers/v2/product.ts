import express from "express"
import { getAllProduct } from "../../controllers/product/getAllProduct"
import { createProduct } from "../../controllers/product/createProduct"
import { updateProduct } from "../../controllers/product/updateProduct"
import { deleteProduct } from "../../controllers/product/deleteProduct"
import { getProduct } from "../../controllers/product/getproduct" 
import { check_errors } from "../../middlewares/common"
import {
  check_req_deleteproduct,
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

router.delete(
  "/deleteproduct",
  check_req_deleteproduct,
  check_errors,
  deleteProduct,
)

router.get(
  "/getproduct",
  check_req_deleteproduct,
  check_errors,
  getProduct,
)

export default router
