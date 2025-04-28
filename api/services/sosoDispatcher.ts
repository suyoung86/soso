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
  operation?: string;    
  key?: string;           
  servicekey: string;    
  type?: string;        
  indsLclsCd?: string;
  indsMclsCd?: string;
  indsSclsCd?: string;
  numOfRows?: number;
  pageNo?: number;
  divId?: string;
  minx?: number;
  miny?: number;
  maxx?: number;
  maxy?: number;
  radius?: number;
  cx?: number;
  cy?: number;
  [key: string]: any; 
}

export const handleOperation = async (operation: string, query: any) => {

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
