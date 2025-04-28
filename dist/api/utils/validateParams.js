"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = void 0;
const validateParams = (query, required) => {
    const missing = required.filter((p) => !query[p]);
    if (missing.length > 0) {
        throw {
            message: `Missing required query params 왜왜왜왜왜왜: ${missing.join(", ")}`,
            status: 400
        };
    }
};
exports.validateParams = validateParams;
