"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreZoneInRadius = void 0;
const validatestoreZoneInRadius = (query) => {
    const { servicekey, radius, cx, cy, type } = query;
    if (!servicekey || !radius || !cx || !cy || !type) {
        throw { message: "storeZoneInRadius에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreZoneInRadius = validatestoreZoneInRadius;
