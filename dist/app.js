"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
class App {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = express_1.default();
            /**
             * Health Check endpoints
             */
            app.get('/status', (req, res) => {
                res.status(200).end();
            });
            /**
             * Start Express server
             */
            app.listen(config_1.default.port, () => {
                console.log("App is running at http://localhost:%d in %s mode", config_1.default.port, config_1.default.env);
                console.log("Press CTRL-C to stop\n");
            });
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map