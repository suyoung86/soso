"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv")); // 추가 ✅
dotenv_1.default.config(); // 추가 ✅import express from "express";
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sosoRouter_1 = __importDefault(require("./routes/sosoRouter"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use("/soso", sosoRouter_1.default);
app.listen(PORT, () => {
    console.log(`✅ Soso API Server running at http://localhost:${PORT}`);
});
