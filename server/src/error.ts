class BaseError extends Error {
  constructor(message: string) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class ApplicationError extends BaseError {
  name = "ApplicationError";
}

export class ResponseError extends ApplicationError {
  name = "ResponseError";
  statusCode = 500;
}
