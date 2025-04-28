"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchstoreZoneOne = void 0;
const axios_1 = __importDefault(require("axios"));
const validateParams_1 = require("../utils/validateParams");
const fetchstoreZoneOne = async (query) => {
    (0, validateParams_1.validateParams)(query, ["key", "servicekey", "type"]);
    const url = "http://apis.data.go.kr/B553077/api/open/sdsc2/storeZoneOne";
    const response = await axios_1.default.get(url, {
        params: {
            // 만약 외부 API가 'ServiceKey'라는 이름을 요구하면 키 이름 변경
            servicekey: query.servicekey,
            ...query, // 나머지 파라미터 그대로 전달
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
exports.fetchstoreZoneOne = fetchstoreZoneOne;
