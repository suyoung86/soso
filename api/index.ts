import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors()); // CORS 에러 방지용 (프론트와 연동 시 필요)

app.get("/weather", async (req: Request, res: Response) => {
  const { serviceKey, numOfRows, pageNo, base_date, base_time, nx, ny } =
    req.query;

  if (
    !serviceKey ||
    !numOfRows ||
    !pageNo ||
    !base_date ||
    !base_time ||
    !nx ||
    !ny
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";

  try {
    const response = await axios.get(api_url, {
      params: {
        serviceKey,
        numOfRows,
        pageNo,
        base_date,
        base_time,
        nx,
        ny,
      },
      responseType: "text", // XML 그대로 받아오기 위해 text 설정
    });

    res.set("Content-Type", "application/xml;charset=utf-8");
    res.send(response.data);
  } catch (error: any) {
    console.error("API 호출 오류:", error?.response?.status || error.message);
    res.status(error?.response?.status || 500).send("기상청 API 호출 오류");
  }
});

app.listen(3000, () => {
  console.log(
    "✅ 서버 실행됨: http://localhost:3000/weather?serviceKey=인증키&numOfRows=10&pageNo=1&base_date=20241028&base_time=0600&nx=61&ny=125"
  );
});
