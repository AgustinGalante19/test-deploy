import LotesService from '../Services/SqlService/LotesService';
import ILotes from '../Models/ILote'
import { Request, Response } from 'express';

class LotesController {
    async GetLotes(req: Request, res: Response) {

        let result = await LotesService.getLotes();
        let records: ILotes[] = result.recordset;

        console.log(records);
        res.json(records);

        /* res.send('lotes controller') */
    }

    async GetLotesByPage(req: Request, res: Response) {
        const { params } = req
        console.log(params.start, params.end);

        let result = await LotesService.getLotesByPage(params.start, params.end);
        let records: ILotes[] = result.recordset;

        /*z`console.log(records); */

        res.json(records);
        /*  res.send('Lotes by  page controller') */
    }

}
const Lotes = new LotesController();

export default Lotes;