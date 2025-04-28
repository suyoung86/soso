export const validatestoreListInRadius = (query: any) => {
  const { servicekey, radius, cx, cy, indsLclsCd, indsMclsCd, indsSclsCd, numOfRows, pageNo, type } = query;
  if (!servicekey || !radius || !cx || !cy || !indsLclsCd || !indsMclsCd || !indsSclsCd || !numOfRows || !pageNo || !type) {
    throw { message: "storeListInRadius에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
