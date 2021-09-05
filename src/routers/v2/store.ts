import express from "express"
import { createStore } from "../../controllers/store/createStore"
import { updateStore } from "../../controllers/store/updateStore"
import { getaAlStore } from "../../controllers/store/getAllStore"
import { getStore } from "../../controllers/store/getStore"
import { check_errors } from "../../middlewares/common"
import {
  check_req_createstore,
  check_req_updateestore,
  check_req_getstore,
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

router.get(
  "/getallstore",
  getaAlStore,
)

router.get(
  "/getstore",
  check_req_getstore,
  check_errors,
  getStore,
)



export default router
