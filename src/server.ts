import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import Lotes from './routes/Lotes'
dotenv.config()

class Server {
    private app: express.Application;

    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }

    config(): void {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(cors());
        this.app.use(morgan("dev"));
    }

    routes(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('hello world')
        })

        this.app.use('/api', Lotes)
    }

    start(): void {
        this.app.listen(process.env.PORT || this.app.get('port'), () => {
            console.log('server on port ', this.app.get('port'))
        })
    }
}

const server = new Server()
server.start()