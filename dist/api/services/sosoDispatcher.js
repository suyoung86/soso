"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOperation = void 0;
const baroApi_1 = require("./baroApi");
const largeUpjongList_1 = require("./largeUpjongList");
const middleUpjongList_1 = require("./middleUpjongList");
const reqStoreModify_1 = require("./reqStoreModify");
const smallUpjongList_1 = require("./smallUpjongList");
const storeListByDate_1 = require("./storeListByDate");
const storeListInArea_1 = require("./storeListInArea");
const storeListInBuilding_1 = require("./storeListInBuilding");
const storeListInDong_1 = require("./storeListInDong");
const storeListInPnu_1 = require("./storeListInPnu");
const storeListInPolygon_1 = require("./storeListInPolygon");
const storeListInRadius_1 = require("./storeListInRadius");
const storeListInRectangle_1 = require("./storeListInRectangle");
const storeListInUpjong_1 = require("./storeListInUpjong");
const storeOne_1 = require("./storeOne");
const storeZoneInAdmi_1 = require("./storeZoneInAdmi");
const storeZoneInRadius_1 = require("./storeZoneInRadius");
const storeZoneInRectangle_1 = require("./storeZoneInRectangle");
const storeZoneOne_1 = require("./storeZoneOne");
const handleOperation = async (operation, query) => {
    if (!operation)
        throw { message: "operation 파라미터가 필요합니다", status: 400 };
    switch (operation) {
        case "baroApi":
            return await (0, baroApi_1.fetchbaroApi)(query);
        case "largeUpjongList":
            return await (0, largeUpjongList_1.fetchlargeUpjongList)(query);
        case "middleUpjongList":
            return await (0, middleUpjongList_1.fetchmiddleUpjongList)(query);
        case "reqStoreModify":
            return await (0, reqStoreModify_1.fetchreqStoreModify)(query);
        case "smallUpjongList":
            return await (0, smallUpjongList_1.fetchsmallUpjongList)(query);
        case "storeListByDate":
            return await (0, storeListByDate_1.fetchstoreListByDate)(query);
        case "storeListInArea":
            return await (0, storeListInArea_1.fetchstoreListInArea)(query);
        case "storeListInBuilding":
            return await (0, storeListInBuilding_1.fetchstoreListInBuilding)(query);
        case "storeListInDong":
            return await (0, storeListInDong_1.fetchstoreListInDong)(query);
        case "storeListInPnu":
            return await (0, storeListInPnu_1.fetchstoreListInPnu)(query);
        case "storeListInPolygon":
            return await (0, storeListInPolygon_1.fetchstoreListInPolygon)(query);
        case "storeListInRadius":
            return await (0, storeListInRadius_1.fetchstoreListInRadius)(query);
        case "storeListInRectangle":
            return await (0, storeListInRectangle_1.fetchstoreListInRectangle)(query);
        case "storeListInUpjong":
            return await (0, storeListInUpjong_1.fetchstoreListInUpjong)(query);
        case "storeOne":
            return await (0, storeOne_1.fetchstoreOne)(query);
        case "storeZoneInAdmi":
            return await (0, storeZoneInAdmi_1.fetchstoreZoneInAdmi)(query);
        case "storeZoneInRadius":
            return await (0, storeZoneInRadius_1.fetchstoreZoneInRadius)(query);
        case "storeZoneInRectangle":
            return await (0, storeZoneInRectangle_1.fetchstoreZoneInRectangle)(query);
        case "storeZoneOne":
            return await (0, storeZoneOne_1.fetchstoreZoneOne)(query);
        default:
            throw { message: `지원하지 않는 operation: ${operation}`, status: 400 };
    }
};
exports.handleOperation = handleOperation;
