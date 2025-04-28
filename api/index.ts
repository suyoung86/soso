import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import sosoRouter from "./routes/sosoRouter"; 

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/soso", sosoRouter);

export default app;