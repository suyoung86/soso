export const validatelargeUpjongList = (query: any) => {
  const { servicekey, type } = query;
  if (!servicekey || !type) {
    throw { message: "largeUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
