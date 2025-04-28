"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreListInArea = void 0;
const validatestoreListInArea = (query) => {
    const { servicekey, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !key || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
        throw { message: "storeListInArea에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreListInArea = validatestoreListInArea;
