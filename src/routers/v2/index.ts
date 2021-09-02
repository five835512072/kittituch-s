import express from "express"
import Product from "./product"
import Store from "./store"


const routers = express.Router()
const bp = require("body-parser")

routers.use(bp.json())
routers.use(bp.urlencoded({ extended: true }))

routers.use("/product", Product)
routers.use("/store", Store)

export default routers