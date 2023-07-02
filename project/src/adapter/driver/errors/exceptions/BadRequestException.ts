import { HttpException } from './HttpException'
import { HttpStatus } from './HttpStatus'

export class BadRequestException extends HttpException {
    constructor(response: string | Record<string, any>) {
        super(response, HttpStatus.BAD_REQUEST)
        this.name = 'BadRequestException'
    }
}
