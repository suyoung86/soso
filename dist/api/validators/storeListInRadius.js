"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreListInRadius = void 0;
const validatestoreListInRadius = (query) => {
    const { servicekey, radius, cx, cy, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !radius || !cx || !cy || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
        throw { message: "storeListInRadius에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreListInRadius = validatestoreListInRadius;
