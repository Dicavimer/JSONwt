import { Router } from "express";
import { Acceso, verifyToken } from "../controllers_P/route.protected.controller.js";

const router = Router();

router.get("/api/protected", verifyToken, Acceso)


export default router;