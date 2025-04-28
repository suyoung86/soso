"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreListInPolygon = void 0;
const validatestoreListInPolygon = (query) => {
    const { servicekey, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !key || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
        throw { message: "baroApi에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreListInPolygon = validatestoreListInPolygon;
