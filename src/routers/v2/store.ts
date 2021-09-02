import express from "express"
import { createStore } from "../../controllers/store/createStore"

const router = express.Router()

router.post(
  "/createstore",
  createStore,
)

export default router
