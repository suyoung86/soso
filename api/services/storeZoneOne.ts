import axios from "axios";
import { validateParams } from "../utils/validateParams";

export const fetchstoreZoneOne = async (query: any) => {
  validateParams(query, ["key", "type"]);

  const url = "http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneOne";
  const response = await axios.get(url, {
    params: {
      // 만약 외부 API가 'ServiceKey'라는 이름을 요구하면 키 이름 변경
      servicekey: query.servicekey,
      ...query,  // 나머지 파라미터 그대로 전달
    },
    responseType: "text",
  });

  const contentType = query.type === "json"
  ? "application/json;charset=utf-8"
  : "application/xml;charset=utf-8";

  return {
    contentType: "application/xml;charset=utf-8",
    data: response.data,
  };
};
