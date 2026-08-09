import { Router } from "express";

import authRouter from "../modules/auth/auth.routes.js";

const  router = Router();
router.use('/auth',authRouter);

router.get("/hello", (req, res) => {
  res.send("Hello World 🚀");
});
export default  router