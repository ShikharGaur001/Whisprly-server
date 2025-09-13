import { Router } from "express";
import { getUserInfo, signin, signup } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/signin", signin);
authRoutes.get("/user-info", verifyToken, getUserInfo);

export default authRoutes;
