import express from "express"
import { getAllProduct } from "../../controllers/product/getAllProduct"

const router = express.Router()

router.get(
  "/getallproduct",
  getAllProduct,
)

export default router
