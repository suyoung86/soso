export const validateStorelistinupjong = (query: any) => {
    const { servicekey, radius, cx, cy, type } = query;
    if (!servicekey || !radius || !cx || !cy || !type) {
        throw { message: "storeListInUpjong에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  