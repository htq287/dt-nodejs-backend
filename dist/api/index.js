"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./routes/user"));
exports.default = () => {
    const app = express_1.Router();
    user_1.default(app);
    return app;
};
//# sourceMappingURL=index.js.map