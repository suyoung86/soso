"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatelargeUpjongList = void 0;
const validatelargeUpjongList = (query) => {
    const { servicekey, indsLclsCd } = query;
    if (!servicekey || !indsLclsCd) {
        throw { message: "largeUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatelargeUpjongList = validatelargeUpjongList;
