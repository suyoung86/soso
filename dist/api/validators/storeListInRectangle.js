"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreListInRectangle = void 0;
const validatestoreListInRectangle = (query) => {
    const { servicekey, minx, miny, maxx, maxy, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !minx || !miny || !maxx || !maxy || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
        throw { message: "storeListInRadius에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreListInRectangle = validatestoreListInRectangle;
