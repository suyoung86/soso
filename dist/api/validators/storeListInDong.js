"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreListInDong = void 0;
const validatestoreListInDong = (query) => {
    const { servicekey, divId, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !divId || !key || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
        throw { message: "storeListInDong에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreListInDong = validatestoreListInDong;
