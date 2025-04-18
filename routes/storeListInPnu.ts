import { Router, Request, Response } from "express";
import axios from "axios";

const router = Router();

router.get("/soso", async (req: Request, res: Response) => {
  const { servicekey, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = req.query;

  if (
    !servicekey ||
    !key ||
    !indsLclsCd ||
    !indsMclsCd ||
    !indsSclsCd ||
    !numOfRows ||
    !pageNo ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url = "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInPnu";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type
      },
      responseType: "text",
    });

    res.set("Content-Type", "application/xml;charset=utf-8");
    res.send(response.data);
  } catch (error: any) {
    console.error("API 호출 오류:", error?.response?.status || error.message);
    res.status(error?.response?.status || 500).send("소상공인 API 호출 오류");
  }
});

export default router;
