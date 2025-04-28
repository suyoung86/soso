"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatereqStoreModify = void 0;
const validatereqStoreModify = (query) => {
    const { servicekey, bizesId, bizesNm, brchNm, indsSclsCd, adongCd, lnoAdr, rdnmAdr, bldNm, dongNo, flrNo, hoNo, opbizDt, clbizDt, etcChgReqCnts } = query;
    if (!servicekey || !bizesId || !bizesNm || !brchNm || !indsSclsCd || !adongCd || !lnoAdr || !rdnmAdr || !bldNm || !dongNo || !flrNo || !hoNo || !opbizDt || !clbizDt || !etcChgReqCnts) {
        throw { message: "reqStoreModify에 필요한 파라미터가 부족합니다", status: 400 };
    }
};
exports.validatereqStoreModify = validatereqStoreModify;
