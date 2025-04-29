export const validatemiddleUpjongList = (query: any) => {
  const { servicekey,indsLclsCd } = query;
  if (!servicekey || !indsLclsCd) {
    throw { message: "middleUpjongList에 필요한 파라미터가 부족합니다", status: 400 };
  }
};
