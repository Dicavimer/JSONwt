import { Router } from "express";
import { CreateUser, Initial, Login } from "../controllers_P/route.api.controller.js";

const router = Router();

router.get("/api", Initial)
router.post("/api", Login)
router.post("/api/crear", CreateUser)

export default router;