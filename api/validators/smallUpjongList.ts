export const validateSmallupjonglist = (query: any) => {
  const { serviceKey, resId, catId, ctprvnCd, type } = query;
  if (!serviceKey || !resId || !catId || !ctprvnCd || !type) {
    throw { message: "smallUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
