import { fetchbaroApi } from "./baroApi";
import { fetchlargeUpjongList } from "./largeUpjongList";
import { fetchmiddleUpjongList } from "./middleUpjongList";
import { fetchreqStoreModify } from "./reqStoreModify";
import { fetchsmallUpjongList } from "./smallUpjongList";
import { fetchstoreListByDate } from "./storeListByDate";
import { fetchstoreListInArea } from "./storeListInArea";
import { fetchstoreListInBuilding } from "./storeListInBuilding";
import { fetchstoreListInDong } from "./storeListInDong";
import { fetchstoreListInPnu } from "./storeListInPnu";
import { fetchstoreListInPolygon } from "./storeListInPolygon";
import { fetchstoreListInRadius } from "./storeListInRadius";
import { fetchstoreListInRectangle } from "./storeListInRectangle";
import { fetchstoreListInUpjong } from "./storeListInUpjong";
import { fetchstoreOne } from "./storeOne";
import { fetchstoreZoneInAdmi } from "./storeZoneInAdmi";
import { fetchstoreZoneInRadius } from "./storeZoneInRadius";
import { fetchstoreZoneInRectangle } from "./storeZoneInRectangle";
import { fetchstoreZoneOne } from "./storeZoneOne";

interface Query {
  operation?: string;     // 오퍼레이션 구분 (선택)
  key?: string;           // 사용자 구분 키 (선택)
  servicekey: string;    // API 인증 키 (대소문자 혼용되는 경우도 있으므로 보존)

  // 공통 필수 항목

  type?: string;           // 응답 형식 ("json", "xml")

  // 산업 분류
  indsLclsCd?: string;
  indsMclsCd?: string;
  indsSclsCd?: string;

  // 페이징
  numOfRows?: number;
  pageNo?: number;

  // 행정 구분
  divId?: string;

  // 공간 좌표 기반 (사각형 영역)
  minx?: number;
  miny?: number;
  maxx?: number;
  maxy?: number;

  // 공간 좌표 기반 (반경)
  radius?: number;
  cx?: number;
  cy?: number;

  [key: string]: any; // 유연한 확장 가능성 고려
}

}

export const handleOperation = async (query: Query) => {
  const { operation } = query;

  if (!operation) throw { message: "operation 파라미터가 필요합니다", status: 400 };

  switch (operation) {
    case "baroApi":
      return await fetchbaroApi(query);
    case "largeUpjongList":
      return await fetchlargeUpjongList(query);
    case "middleUpjongList":
      return await fetchmiddleUpjongList(query);
    case "reqStoreModify":
      return await fetchreqStoreModify(query);
    case "smallUpjongList":
      return await fetchsmallUpjongList(query);
    case "storeListByDate":
      return await fetchstoreListByDate(query);
    case "storeListInArea":
      return await fetchstoreListInArea(query);
    case "storeListInBuilding":
      return await fetchstoreListInBuilding(query);
    case "storeListInDong":
      return await fetchstoreListInDong(query);
    case "storeListInPnu":
      return await fetchstoreListInPnu(query);
    case "storeListInPolygon":
      return await fetchstoreListInPolygon(query);
    case "storeListInRadius":
      return await fetchstoreListInRadius(query);
    case "storeListInRectangle":
      return await fetchstoreListInRectangle(query);
    case "storeListInUpjong":
      return await fetchstoreListInUpjong(query);
    case "storeOne":
      return await fetchstoreOne(query);
    case "storeZoneInAdmi":
      return await fetchstoreZoneInAdmi(query);
    case "storeZoneInRadius":
      return await fetchstoreZoneInRadius(query);
    case "storeZoneInRectangle":
      return await fetchstoreZoneInRectangle(query);
    case "storeZoneOne":
      return await fetchstoreZoneOne(query);
    default:
      throw { message: `지원하지 않는 operation: ${operation}`, status: 400 };
  }
};
