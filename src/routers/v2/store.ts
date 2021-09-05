import express from "express"
import { createStore } from "../../controllers/store/createStore"
import { updateStore } from "../../controllers/store/updateStore"
import { check_errors } from "../../middlewares/common"
import {
  check_req_createstore,
  check_req_updateestore
} from "../../middlewares/store"


const router = express.Router()

router.post(
  "/createstore",
  check_req_createstore,
  check_errors,
  createStore,
)

router.post(
  "/updatestore",
  check_req_updateestore,
  check_errors,
  updateStore,
)

export default router
