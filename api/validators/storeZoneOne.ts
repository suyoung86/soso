export const validatestoreZoneOne = (query: any) => {
  const { key, servicekey, type } = query;
  if (!key || !servicekey || !type) {
    throw { message: "storeZoneOne에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
