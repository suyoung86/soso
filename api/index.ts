import dotenv from "dotenv"; // 추가 ✅
dotenv.config(); // 추가 ✅import express from "express";

import express from "express";
import cors from "cors";
import sosoRouter from "./routes/sosoRouter";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/soso", sosoRouter);

app.listen(PORT, () => {
  console.log(`✅ Soso API Server running at http://localhost:${PORT}`);
});
