"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatesmallUpjongList = void 0;
const validatesmallUpjongList = (query) => {
    const { servicekey, resId, catId, ctprvnCd, type } = query;
    if (!servicekey || !resId || !catId || !ctprvnCd || !type) {
        throw { message: "smallUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatesmallUpjongList = validatesmallUpjongList;
