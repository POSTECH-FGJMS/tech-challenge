import { NextFunction, Request, Response } from 'express'
import { HttpException } from './exeptions/HttpException';

export const errorHandler = (
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { status, response } = error;
    console.error(error)

    res.status(status).send({
        status,
        body: response
    })
    next()
}
