"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreListInBuilding = void 0;
const validatestoreListInBuilding = (query) => {
    const { servicekey, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !key || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
        throw { message: "storeListInBuilding에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreListInBuilding = validatestoreListInBuilding;
