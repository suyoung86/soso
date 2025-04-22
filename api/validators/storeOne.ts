export const validateStorelistinupjong = (query: any) => {
    const { servicekey, key } = query;
    if (!key || !servicekey) {
      throw { message: "storeListInUpjong에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  