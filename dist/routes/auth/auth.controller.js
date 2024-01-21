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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * Get Author Infomation
 * @auth not required
 * @route {GET} /author
 * @returns author Author
 */
router.get('/author', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.json({ 'Author': 'Hung Q.' }).status(200);
    }
    catch (e) {
        console.error(e.message);
        return next(e);
    }
}));
exports.default = router;
//# sourceMappingURL=auth.controller.js.map