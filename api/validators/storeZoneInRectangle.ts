export const validatestoreZoneInRectangle = (query: any) => {
    const { servicekey, minx, miny, maxx, maxy, type } = query;
    if (!servicekey || !minx || !miny || !maxx || !maxy || !type) {
        throw { message: "storeZoneInRectangle에 필요한 파라미터가 부족합니다", status: 400 };
    }
  };
  