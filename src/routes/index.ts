import { Router } from "express";
import ClientsRouter from "./clients.routes"

const router = Router()

router.use("/users", ClientsRouter)

export default router