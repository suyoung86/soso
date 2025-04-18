import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors()); 

app.get("/soso", async (req: Request, res: Response) => {
  const { key, serviceKey, type } = req.query;

  if (
    !key ||
    !serviceKey ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneOne";

  try {
    const response = await axios.get(api_url, {
      params: {
        key,
        serviceKey,
        type,
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

app.listen(3000, () => {
  console.log(
    "서버 실행 중: http://localhost:3000/soso?key=9174&serviceKey=zWJZJMGi7kBIlToG%2FGVb4RpeALKnhLOKl6B0XRnr%2Bs2w2WtifQ1c8ktURng7cT9gtnNh%2FjkBOrSD0rBqE2mPlA%3D%3D&type=xml"
  );
});
