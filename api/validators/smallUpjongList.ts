export const validatesmallUpjongList = (query: any) => {
  const { servicekey, indsLclsCd, indsMclsCd } = query;
  if (!servicekey || !indsLclsCd || !indsMclsCd) {
    throw { message: "smallUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
