import express from "express"
import routers from "./routers"
import dotenv from "dotenv"
import cors from "cors"
import { errorHandler } from "./helpers/errorHandler"


const app = express()

dotenv.config()


app.use(cors())
app.listen(process.env.NODE_PORT, () => console.log("running"))
app.use("/", routers)
//app.use(errorHandler)

export default app