import { Express, NextFunction, Request, Response } from 'express';
import createUser from './controllers/createUser';
import createEvent from './controllers/createEvent';
import listEvents from './controllers/listEvents';
import bodyParser from 'body-parser';

export default (app: Express) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.post('/users', createUser);
  app.post('/events', createEvent);
  app.get('/events', listEvents);

  app.get('/', (req: Request, res: Response) => {
    res.json({ msg: 'ok' })
  });
}
