import { NextFunction, Request, Response } from 'express';
import Db from '../Db'
import patterns from '../patterns'

export default (req: Request, res: Response, next: NextFunction) => {

    // normally you would not respond with error messages like this, just codes

    const { email, password, phone } = req.body;
    if (!email || !password)
        return res.status(400).send('missing required params')
    
    if (!patterns.email.test(email))
        return res.status(400).send('email bad format')

    if (phone && !patterns.phone.test(phone))
        return res.status(400).send('phone bad format')

    // no async needed as this is a very simple in-memory singleton db
    try {
        Db.addUser({
            email, password, phone
        })
        res.json({ msg: 'user added' })
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}
