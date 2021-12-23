// Imports
import express from "express";
const apiRouter = express.Router();
import checkAuthenticated from "../middleware/checkAuthenticated.js";

apiRouter.get("/", checkAuthenticated, (req, res) => {
  res.json({
    message: "Hello " + req.user.displayName,
  });
});

import authRouter from "./auth.js";
apiRouter.use("/auth", authRouter);

export default apiRouter;
