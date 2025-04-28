"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreListInPnu = void 0;
const validatestoreListInPnu = (query) => {
    const { servicekey, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !key || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
        throw { message: "storeListInPnu에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreListInPnu = validatestoreListInPnu;
