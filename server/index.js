// Imports
import express from "express";
const app = express();
import mongoose from "mongoose";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// Init mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/// Init passport
import initialize from "./passport.js";
initialize(passport);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    secure: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Set up api routes
import apiRouter from "./routes/api.js";
app.use("/api/v1/", apiRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
