import axios from "axios";
import { validateParams } from "../utils/validateParams";

export const fetchstoreOne = async (query: any) => {
  validateParams(query, ["servicekey", "key"]);

  const url = "http://apis.data.go.kr/B553077/api/open/sdsc2/storeOne";

  const response = await axios.get(url, {
    params: query,
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
