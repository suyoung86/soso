export const validateStorelistinupjong = (query: any) => {
    const { servicekey, radius, cx, cy } = query;
    if (!servicekey || !radius || !cx || !cy ) {
        throw { message: "storeListInUpjong에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  