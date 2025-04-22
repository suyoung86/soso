export const validateStorelistinradius = (query: any) => {
    const { servicekey, minx, miny, maxx, maxy, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !minx || !miny || !maxx || !maxy || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
      throw { message: "storeListInRadius에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  