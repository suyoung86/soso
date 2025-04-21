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

app.use("/api/routes/storeZoneOne", storeZoneOneRouter);
app.use("/api/routes/storeZoneInRadius", storeZoneInRadiusRouter);
app.use("/api/routes/storeZoneInRectangle", storeZoneInRectangleRouter);
app.use("/api/routes//storeZoneInAdmi", storeZoneInAdmiRouter);
app.use("/api/routes/storeOne", storeOneRouter);
app.use("/api/routes/storeListInBuilding", storeListInBuildingRouter);
app.use("/api/routes/storeListInPnu", storeListInPnuRouter);
app.use("/api/routes/storeListInDong", storeListInDongRouter);
app.use("/api/routes/storeListInArea", storeListInAreaRouter);
app.use("/api/routes/storeListInRadius", storeListInRadiusRouter);
app.use("/api/routes/storeListInRectangle", storeListInRectangleRouter);
app.use("/api/routes/storeListInPolygon", storeListInPolygonRouter);
app.use("/api/routes/storeListInUpjong", storeListInUpjongRouter);
app.use("/api/routes/storeListByDate", storeListByDateRouter);
app.use("/api/routes/reqStoreModify", reqStoreModifyRouter);
app.use("/api/routes/largeUpjongList", largeUpjongListRouter);
app.use("/api/routes/middleUpjongList", middleUpjongListRouter);
app.use("/api/routes/smallUpjongList", smallUpjongListRouter);
app.use("/api/routes/baroApi", baroApiRouter);

app.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});
