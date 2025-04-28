"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatebaroApi = void 0;
const validatebaroApi = (query) => {
    const { servicekey, resId, catId, signguCd, type } = query;
    if (!servicekey || !resId || !catId || !signguCd || !type) {
        throw { message: "baroApi에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatebaroApi = validatebaroApi;
