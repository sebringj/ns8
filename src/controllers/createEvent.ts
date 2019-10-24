import { NextFunction, Request, Response } from 'express';
import Db from '../Db'
import patterns from '../patterns'

export default (req: Request, res: Response, next: NextFunction) => {
    // yes i know don't pass email or have it as unique identifier, its PII bad form
    const { type, email } = req.body
    if (!type)
        return res.status(400).send('missing type')

    if (email && !patterns.email.test(email))
        return res.status(400).send('email bad format')

    Db.addEvent({
        type,
        created: Date.now(),
        email
    })
    res.json({ msg: 'event added' })
}
