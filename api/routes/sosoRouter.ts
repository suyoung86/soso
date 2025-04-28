// api/routes/sosoRouter.ts

import { Router, Request, Response } from "express";
import { handleOperation } from "../services/sosoDispatcher";

const router = Router();

// 기존 router.get("/soso", ...)를 router.get("/", ...)로 수정
router.get("/", async (req: Request, res: Response) => {
  // operation 추출
  const { operation, ServiceKey, servicekey, ...rest } = req.query;

  // 필수 operation 체크
  if (!operation || typeof operation !== "string") {
    return res.status(400).json({ message: "operation 파라미터가 필요합니다" });
  }

  // 서비스 키 환경변수 또는 쿼리 처리
  const SERVICE_KEY_ENV = process.env.SERVICE_KEY;  // 환경변수에 API 키 저장했다고 가정
  if (SERVICE_KEY_ENV) {
    // 환경변수에 키가 있으면 해당 값을 사용
    rest.servicekey = SERVICE_KEY_ENV;
  } else if (servicekey || ServiceKey) {
    // 요청에 ServiceKey (대문자)나 servicekey (소문자)가 있다면 통일하여 사용
    rest.servicekey = servicekey || ServiceKey;
  }

  try {
    const result = await handleOperation(operation as string, rest);
    res.set("Content-Type", result.contentType);
    res.send(result.data);
  } catch (error: any) {
    console.error("오류:", error.message || error);
    res.status(error.status || 500).json({ message: error.message || "내부 서버 오류" });
  }
});

export default router;

