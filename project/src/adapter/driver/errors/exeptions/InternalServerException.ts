import { HttpException } from "./HttpException"
import { HttpStatus } from "./HttpStatus"

export class InternalServerException extends HttpException {
    constructor(response = 'Internal Server Error') {
        super(response, HttpStatus.INTERNAL_SERVER_ERROR)
        this.name = 'InternalServerException'
    }
}