export const validatemiddleUpjongList = (query: any) => {
  const { servicekey, resId, catId, type } = query;
  if (!servicekey || !resId || !catId || !type) {
    throw { message: "middleUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
