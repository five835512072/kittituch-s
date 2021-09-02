import express from "express"
import routers from "./routers"
import dotenv from "dotenv"
import cors from "cors"


const app = express()

dotenv.config()


app.use(cors())
app.use("/", routers)
app.listen(process.env.NODE_PORT, () => console.log("running"))

export default app