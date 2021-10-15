import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import MainRouter from './router';
import ErrorHandler from './models/ErrorHandler';
import { connectDB } from './models/index'

// load the environment variables from the .env file
dotenv.config({
  path: './.env',
});

connectDB()

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
  public router = MainRouter;
}
// initialize server app
const server = new Server();

server.app.use(cors());
// server.app.options('*', cors());

server.app.use('/api', server.router);

// make server app handle any error
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message,
  });
});

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => {
    console.log(`> Server is listening on http://localhost:${port}`);
  });
})();
