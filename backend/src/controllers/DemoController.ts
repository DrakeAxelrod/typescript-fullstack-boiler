import ErrorHandler from '../models/ErrorHandler';

class DemoController {
  defaultMethod() {
    return "Hello World"
  }
  defaultError() {
    throw new ErrorHandler(501, 'Not implemented method');
  }
}

export = new DemoController();
