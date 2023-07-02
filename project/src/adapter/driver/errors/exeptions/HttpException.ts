export class HttpException extends Error {
  response: string | Record<string, any>;
  status: number;

  constructor(response: string | Record<string, any>, status: number) {
    super();
    this.response = response;
    this.status = status;
  }
}