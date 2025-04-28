"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreZoneOne = void 0;
const validatestoreZoneOne = (query) => {
    const { key, servicekey, type } = query;
    if (!key || !servicekey || !type) {
        throw { message: "storeZoneOne에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreZoneOne = validatestoreZoneOne;
