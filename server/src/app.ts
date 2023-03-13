import express, { Application } from "express";
import morgan from "morgan";
import dotenv from "dotenv"
import routes from "./routes/index"

dotenv.config()

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes)

export default app;
