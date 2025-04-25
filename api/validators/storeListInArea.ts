export const validatestoreListInArea = (query: any) => {
    const { servicekey, key, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
    if (!servicekey || !key || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
      throw { message: "storeListInArea에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  