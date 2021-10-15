import { Router } from 'express';
import DemoRouter from './routers/DemoRouter';

class MainRouter {
  private _router = Router();

  private _subrouterDemo = DemoRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/demo', this._subrouterDemo);
  }
}

export = new MainRouter().router;
