import axios from "axios";

export const fetchBaroapi = async (query: any) => {
  const url = "http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneInRadius";
  const response = await axios.get(url, {
    params: query,
    responseType: "text",
  });
  return {
    contentType: "application/xml;charset=utf-8",
    data: response.data,
  };
};
