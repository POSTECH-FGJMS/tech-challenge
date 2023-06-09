import { NextFunction, Request, Response } from 'express'
import { HttpException } from './exceptions/HttpException'
import { HttpStatus } from './exceptions/HttpStatus'

export const errorHandler = (
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(error)
    const errorStatus = error?.status || HttpStatus.INTERNAL_SERVER_ERROR
    const errorResponse = error?.response || 'Internal Server Error'

    res.status(errorStatus).send({
        status: errorStatus,
        body: errorResponse,
    })
    next()
}
