"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreListInUpjong = void 0;
const validatestoreListInUpjong = (query) => {
    const { servicekey, divId, key, numOfRows, pageNo, type } = query;
    if (!servicekey || !divId || !key || !numOfRows || !pageNo || !type) {
        throw { message: "storeListInUpjong에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreListInUpjong = validatestoreListInUpjong;
