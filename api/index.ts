import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import serverlessExpress from '@vendia/serverless-express';
import sosoRouter from "./routes/sosoRouter"; 

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/soso/api/routes", sosoRouter);

export const handler = serverlessExpress({ app });