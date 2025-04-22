export const validateSmallupjonglist = (query: any) => {
  const { servicekey, resId, catId, ctprvnCd, type } = query;
  if (!servicekey || !resId || !catId || !ctprvnCd || !type) {
    throw { message: "smallUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
