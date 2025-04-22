export const validateStorelistinupjong = (query: any) => {
    const { servicekey, minx, miny, maxx, maxy, type } = query;
    if (!servicekey || !minx || !miny || !maxx || !maxy || !type) {
        throw { message: "storeListInUpjong에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  