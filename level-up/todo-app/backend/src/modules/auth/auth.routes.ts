import { Router } from "express";

import { AuthController } from "./auth.controller.js";

const authController = new AuthController();
const authRouter = Router();

authRouter.post('/signup', authController.signup);

export default authRouter;