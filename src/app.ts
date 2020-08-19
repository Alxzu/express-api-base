import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import winston from 'winston';
import expressWinston from 'express-winston';
import errorMiddleware from './middlewares/error.middleware';

export default class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.setupMiddlewares();
  }

  private setupMiddlewares() {
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(errorMiddleware);
    this.server.use(expressWinston.logger({
      // Check for more options https://github.com/bithavoc/express-winston#options
      transports: [
        new winston.transports.Console(),
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json(),
      ),
      meta: true,
      msg: 'HTTP {{req.method}} {{req.url}}',
      expressFormat: true,
      colorize: true,
    }));
  }
}
