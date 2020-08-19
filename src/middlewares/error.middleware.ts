import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

const errorMiddleware = (
  error: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction,
): void => {
  const status = error.status || 500;
  const message = error.message || 'Oops... something went wrong';
  response
    .status(status)
    .send({
      status,
      message,
    });
};

export { errorMiddleware as default };
