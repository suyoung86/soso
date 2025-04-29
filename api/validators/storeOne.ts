export const validatestoreOne = (query: any) => {
    const { servicekey, key } = query;
    if ( !servicekey || !key ) {
      throw { message: "storeOne에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  