
import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors()); // CORS 에러 방지용


app.get("/soso/storeZoneOne", async (req: Request, res: Response) => {
  const { key, servicekey, type } = req.query;

  if (
    !key ||
    !servicekey ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneOne";

  try {
    const response = await axios.get(api_url, {
      params: {
        key, servicekey, type
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


app.get("/soso/storeZoneInRadius", async (req: Request, res: Response) => {
  const { servicekey, radius, cx, cy, type } = req.query;

  if (
    !servicekey ||
    !radius ||
    !cx ||
    !cy ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneInRadius";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, radius, cx, cy, type
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


app.get("/soso/storeZoneInRectangle", async (req: Request, res: Response) => {
  const { servicekey, minx, miny, maxx, maxy, type } = req.query;

  if (
    !servicekey ||
    !minx ||
    !miny ||
    !maxx ||
    !maxy ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneInRectangle";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, minx, miny, maxx, maxy, type
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


app.get("/soso/storeZoneInAdmi", async (req: Request, res: Response) => {
  const { servicekey, divId, key, type } = req.query;

  if (
    !servicekey ||
    !divId ||
    !key ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneInAdmi";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, divId, key, type
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


app.get("/soso/storeOne", async (req: Request, res: Response) => {
  const { key, servicekey } = req.query;

  if (
    !key ||
    !servicekey
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeOne";

  try {
    const response = await axios.get(api_url, {
      params: {
        key, servicekey
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


app.get("/soso/storeListInBuilding", async (req: Request, res: Response) => {
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

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInBuilding";

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


app.get("/soso/storeListInPnu", async (req: Request, res: Response) => {
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

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInPnu";

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


app.get("/soso/storeListInDong", async (req: Request, res: Response) => {
  const { servicekey, divId, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = req.query;

  if (
    !servicekey ||
    !divId ||
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

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInDong";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, divId, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type
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


app.get("/soso/storeListInArea", async (req: Request, res: Response) => {
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

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInArea";

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


app.get("/soso/storeListInRadius", async (req: Request, res: Response) => {
  const { servicekey, radius, cx, cy, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = req.query;

  if (
    !servicekey ||
    !radius ||
    !cx ||
    !cy ||
    !indsLclsCd ||
    !indsMclsCd ||
    !indsSclsCd ||
    !numOfRows ||
    !pageNo ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInRadius";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, radius, cx, cy, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type
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


app.get("/soso/storeListInRectangle", async (req: Request, res: Response) => {
  const { servicekey, minx, miny, maxx, maxy, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = req.query;

  if (
    !servicekey ||
    !minx ||
    !miny ||
    !maxx ||
    !maxy ||
    !indsLclsCd ||
    !indsMclsCd ||
    !indsSclsCd ||
    !numOfRows ||
    !pageNo ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInRectangle";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, minx, miny, maxx, maxy, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type
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


app.get("/soso/storeListInPolygon", async (req: Request, res: Response) => {
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

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInPolygon";

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


app.get("/soso/storeListInUpjong", async (req: Request, res: Response) => {
  const { servicekey, divId, key, numOfRows, pageNo, type } = req.query;

  if (
    !servicekey ||
    !divId ||
    !key ||
    !numOfRows ||
    !pageNo ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInUpjong";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, divId, key, numOfRows, pageNo, type
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


app.get("/soso/storeListByDate", async (req: Request, res: Response) => {
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

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListByDate";

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


app.get("/soso/reqStoreModify", async (req: Request, res: Response) => {
  const { servicekey, bizesId, bizesNm, brchNm, indsSclsCd, adongCd, lnoAdr, rdnmAdr, bldNm, dongNo, flrNo, hoNo, opbizDt, clbizDt, etcChgReqCnts } = req.query;

  if (
    !servicekey ||
    !bizesId ||
    !bizesNm ||
    !brchNm ||
    !indsSclsCd ||
    !adongCd ||
    !lnoAdr ||
    !rdnmAdr ||
    !bldNm ||
    !dongNo ||
    !flrNo ||
    !hoNo ||
    !opbizDt ||
    !clbizDt ||
    !etcChgReqCnts
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/reqStoreModify";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, bizesId, bizesNm, brchNm, indsSclsCd, adongCd, lnoAdr, rdnmAdr, bldNm, dongNo, flrNo, hoNo, opbizDt, clbizDt, etcChgReqCnts
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


app.get("/soso/largeUpjongList", async (req: Request, res: Response) => {
  const { servicekey, indsLclsCd } = req.query;

  if (
    !servicekey ||
    !indsLclsCd
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/largeUpjongList";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, indsLclsCd
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


app.get("/soso/middleUpjongList", async (req: Request, res: Response) => {
  const { servicekey, resId, catId, type } = req.query;

  if (
    !servicekey ||
    !resId ||
    !catId ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/middleUpjongList";

  try {
    const response = await axios.get(api_url, {
      params: {
        servicekey, resId, catId, type
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


app.get("/soso/smallUpjongList", async (req: Request, res: Response) => {
  const { resId, catId, ctprvnCd, serviceKey, type } = req.query;

  if (
    !resId ||
    !catId ||
    !ctprvnCd ||
    !serviceKey ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/smallUpjongList";

  try {
    const response = await axios.get(api_url, {
      params: {
        resId, catId, ctprvnCd, serviceKey, type
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


app.get("/soso/baroApi", async (req: Request, res: Response) => {
  const { serviceKey, resId, catId, signguCd, type } = req.query;

  if (
    !serviceKey ||
    !resId ||
    !catId ||
    !signguCd ||
    !type
  ) {
    return res.status(400).json({ message: "Missing required query params" });
  }

  const api_url =
    "http://apis.data.go.kr/B553077/api/open/sdsc2/baroApi";

  try {
    const response = await axios.get(api_url, {
      params: {
        serviceKey, resId, catId, signguCd, type
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
  console.log("서버 실행 중: http://localhost:3000/soso/[operation_name]");
});
