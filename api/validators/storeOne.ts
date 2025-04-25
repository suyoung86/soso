export const validatestoreOne = (query: any) => {
    const { servicekey, key, type } = query;
    if (!key || !servicekey || type ) {
      throw { message: "storeOne에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  