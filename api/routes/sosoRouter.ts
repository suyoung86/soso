import { Router, Request, Response } from "express";
import { handleOperation } from "../services/sosoDispatcher";

const router = Router();

router.get("/soso/api/services", async (req: Request, res: Response) => {
  const { operation, ...rest } = req.query;

  if (!operation || typeof operation !== "string") {
    return res.status(400).json({ message: "operation 파라미터가 필요합니다" });
  }

  try {
    const result = await handleOperation(operation, ...rest);
    res.set("Content-Type", result.contentType);
    res.send(result.data);
  } catch (error: any) {
    console.error("오류:", error.message || error);
    res.status(error.status || 500).json({ message: error.message || "내부 서버 오류" });
  }
});

export default router;
