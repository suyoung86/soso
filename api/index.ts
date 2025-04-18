import express from "express";
import cors from "cors";

import storeZoneOneRouter from "./routes/storeZoneOne";
import storeZoneInRadiusRouter from "./routes/storeZoneInRadius";
import storeZoneInRectangleRouter from "./routes/storeZoneInRectangle";
import storeZoneInAdmiRouter from "./routes/storeZoneInAdmi";
import storeOneRouter from "./routes/storeOne";
import storeListInBuildingRouter from "./routes/storeListInBuilding";
import storeListInPnuRouter from "./routes/storeListInPnu";
import storeListInDongRouter from "./routes/storeListInDong";
import storeListInAreaRouter from "./routes/storeListInArea";
import storeListInRadiusRouter from "./routes/storeListInRadius";
import storeListInRectangleRouter from "./routes/storeListInRectangle";
import storeListInPolygonRouter from "./routes/storeListInPolygon";
import storeListInUpjongRouter from "./routes/storeListInUpjong";
import storeListByDateRouter from "./routes/storeListByDate";
import reqStoreModifyRouter from "./routes/reqStoreModify";
import largeUpjongListRouter from "./routes/largeUpjongList";
import middleUpjongListRouter from "./routes/middleUpjongList";
import smallUpjongListRouter from "./routes/smallUpjongList";
import baroApiRouter from "./routes/baroApi";

const app = express();
app.use(cors());

app.use("/api/storeZoneOne", storeZoneOneRouter);
app.use("/api/storeZoneInRadius", storeZoneInRadiusRouter);
app.use("/api/storeZoneInRectangle", storeZoneInRectangleRouter);
app.use("/api/storeZoneInAdmi", storeZoneInAdmiRouter);
app.use("/api/storeOne", storeOneRouter);
app.use("/api/storeListInBuilding", storeListInBuildingRouter);
app.use("/api/storeListInPnu", storeListInPnuRouter);
app.use("/api/storeListInDong", storeListInDongRouter);
app.use("/api/storeListInArea", storeListInAreaRouter);
app.use("/api/storeListInRadius", storeListInRadiusRouter);
app.use("/api/storeListInRectangle", storeListInRectangleRouter);
app.use("/api/storeListInPolygon", storeListInPolygonRouter);
app.use("/api/storeListInUpjong", storeListInUpjongRouter);
app.use("/api/storeListByDate", storeListByDateRouter);
app.use("/api/reqStoreModify", reqStoreModifyRouter);
app.use("/api/largeUpjongList", largeUpjongListRouter);
app.use("/api/middleUpjongList", middleUpjongListRouter);
app.use("/api/smallUpjongList", smallUpjongListRouter);
app.use("/api/baroApi", baroApiRouter);

app.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});
