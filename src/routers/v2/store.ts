import express from "express"
import { createStore } from "../../controllers/store/createStore"
import { check_errors } from "../../middlewares/common"
import { check_req_createstore } from "../../middlewares/store"


const router = express.Router()

router.post(
  "/createstore",
  check_req_createstore,
  check_errors,
  createStore,
)

export default router
