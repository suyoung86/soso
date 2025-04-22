export const validateBaroapi = (query: any) => {
  const { serviceKey, resId, catId, signguCd, type } = query;
  if (!serviceKey || !resId || !catId || !signguCd || !type) {
    throw { message: "baroApi에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
