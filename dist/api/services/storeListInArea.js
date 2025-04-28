"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchstoreListInArea = void 0;
const axios_1 = __importDefault(require("axios"));
const validateParams_1 = require("../utils/validateParams");
const fetchstoreListInArea = async (query) => {
    (0, validateParams_1.validateParams)(query, ["servicekey", "key", "indsLclsCd", "indsMclsCd", "indsSclsCd", "numOfRows", "pageNo", "type"]);
    const url = "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInArea";
    const response = await axios_1.default.get(url, {
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
exports.fetchstoreListInArea = fetchstoreListInArea;
