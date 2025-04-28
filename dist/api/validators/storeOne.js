"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatestoreOne = void 0;
const validatestoreOne = (query) => {
    const { key, type } = query;
    if (!key || !type) {
        throw { message: "storeOne에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatestoreOne = validatestoreOne;
