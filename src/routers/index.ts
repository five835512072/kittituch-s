import express from "express"
import v2Collection from "./v2/index"

const routers = express.Router()
const bp = require("body-parser")

routers.use(bp.json())
routers.use(bp.urlencoded({ extended: true }))

routers.use("/v2", v2Collection)

export default routers
