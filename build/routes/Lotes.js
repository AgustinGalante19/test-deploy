"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        /* this.router.get('/GetLotes', LotesController.GetLotes) */
        this.router.get('/getlotes', (req, res) => {
            res.json({ resp: "ok" });
        });
    }
}
const routes = new Routes();
exports.default = routes.router;
