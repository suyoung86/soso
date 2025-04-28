"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchstoreListInRectangle = void 0;
const axios_1 = __importDefault(require("axios"));
const validateParams_1 = require("../utils/validateParams");
const fetchstoreListInRectangle = async (query) => {
    (0, validateParams_1.validateParams)(query, ["servicekey", "minx", "miny", "maxx", "maxy", "indsLclsCd", "indsMclsCd", "indsSclsCd", "numOfRows", "pageNo", "type"]);
    const url = "http://apis.data.go.kr/B553077/api/open/sdsc2/storeListInRectangle";
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
exports.fetchstoreListInRectangle = fetchstoreListInRectangle;
