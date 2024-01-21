"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prod = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
if (fs_1.default.existsSync('.env')) {
    dotenv_1.default.config({ path: '.env' });
}
else {
    dotenv_1.default.config({ path: '.env.example' });
}
exports.prod = process.env.NODE_ENV === "production";
exports.default = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3001,
    /**
     * API configs
     */
    api: {
        prefix: '/v1',
    },
};
//# sourceMappingURL=index.js.map