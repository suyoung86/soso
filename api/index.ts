// api/index.ts

import dotenv from "dotenv"; // ✅ 환경변수 로딩
dotenv.config();

import express from "express";
import cors from "cors";
import sosoRouter from "./routes/sosoRouter"; // ✅ 상대경로 수정

const app = express();

// 미들웨어 등록
app.use(cors());
app.use(express.json()); // ✅ Body 파싱 추가 (필수는 아님)

// API 라우터 연결
app.use("/soso", sosoRouter);

// ✅ app.listen() 절대 호출하면 안 됨
// 대신 app 객체를 export
export default app;
