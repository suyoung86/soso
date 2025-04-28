"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreZoneInAdmi = void 0;
const validatestoreZoneInAdmi = (query) => {
    const { servicekey, divId, key, type } = query;
    if (!servicekey || !divId || !key || !type) {
        throw { message: "storeListInUpjong에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreZoneInAdmi = validatestoreZoneInAdmi;
