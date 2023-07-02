import { HttpException } from "./HttpException"
import { HttpStatus } from "./HttpStatus"

export class NotFoundExeception extends HttpException {
  constructor(response: string | Record<string, any>) {
      super(response, HttpStatus.NOT_FOUND)
      this.name = 'NotFoundExeception'
  }
}