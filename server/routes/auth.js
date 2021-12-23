// Imports
import express from "express";
import passport from "passport";

const authRouter = express.Router();

authRouter.get(
  "/login",
  passport.authenticate("google", { scope: ["profile"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect(process.env.CLIENT_URL + "/auth/success");
  }
);

authRouter.delete("/logout", (req, res) => {
  try {
    req.logOut();
    res.status(204).json({ message: "Successfully logged out" });
  } catch (err) {
    res.status(500).json({ message: "Failed to log out" });
  }
});

export default authRouter;
