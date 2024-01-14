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
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./api"));
const config_1 = __importDefault(require("./config"));
class App {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = (0, express_1.default)();
            /**
             * Health Check endpoints
             */
            app.get('/status', (req, res) => {
                res.status(200).end();
            });
            app.use((0, cors_1.default)());
            // Middleware that transforms the raw string of req.body into json
            app.use(body_parser_1.default.json());
            // Load API routes
            app.use(config_1.default.api.prefix, (0, api_1.default)());
            /// catch 404 and forward to error handler
            app.use((req, res, next) => {
                const err = new Error('Not Found');
                err['status'] = 404;
                next(err);
            });
            /// error handlers
            app.use((err, req, res, next) => {
                if (err.name === 'Unauthorized Error') {
                    return res
                        .status(err.status)
                        .send({ message: err.message })
                        .end();
                }
                return next(err);
            });
            app.use((err, req, res, next) => {
                res.status(err.status || 500);
                res.json({
                    errors: {
                        message: err.message,
                    },
                });
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