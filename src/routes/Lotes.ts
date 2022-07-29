import { Router } from 'express'
import LotesController from '../Controllers/LotesControllers'

class Routes {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        /* this.router.get('/GetLotes', LotesController.GetLotes) */
        this.router.get('/getlotes', (req, res) => {
            res.json({ resp: "ok" })
        })
    }
}

const routes = new Routes();
export default routes.router;