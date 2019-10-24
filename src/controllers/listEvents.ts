import { NextFunction, Request, Response } from 'express'
import Db from '../Db'

export default (req: Request, res: Response, next: NextFunction) => {
    res.json(Db.getEvents(req.query))
}
