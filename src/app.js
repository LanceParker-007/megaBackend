import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));

// 5:40
app.use(express.json({ limit: "16kb" })); //form-data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // url
app.use(express.static("public"));
app.use(cookieParser());

export { app };
