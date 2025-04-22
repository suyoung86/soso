export const validateLargeupjonglist = (query: any) => {
  const { servicekey, indsLclsCd } = query;
  if (!servicekey || !indsLclsCd) {
    throw { message: "largeUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
