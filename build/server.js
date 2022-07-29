"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.send('hello world');
        });
    }
    start() {
        this.app.listen(process.env.PORT || this.app.get('port'), () => {
            console.log('server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
