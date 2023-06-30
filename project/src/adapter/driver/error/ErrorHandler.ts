import { NextFunction, Request, Response } from 'express'
// TODO: criar tratativa de erro
export const errorHandler = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(error)
    res.status(500).send('Ocorreu um erro interno.')
    next()
}
