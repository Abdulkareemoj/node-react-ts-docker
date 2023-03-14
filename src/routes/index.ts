import {Express, Request, Response} from 'express'
import { createShortURL } from '../controllers/shortURL.controller';

function routes(app: Express){
    app.get('/', (req: Request, res: Response)=>{
return res.send('bruh')
    });

    app.post('/createurl', createShortURL);
}

export default routes