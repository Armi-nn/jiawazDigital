import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors"

// App config

dotenv.config({path:"./config.env"})
export const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())
