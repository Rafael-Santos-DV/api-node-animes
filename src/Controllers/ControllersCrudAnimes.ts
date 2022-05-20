import { Request, Response } from 'express';

class ControllerCrudAnimes {
  get(req: Request, res: Response) {
    return res.json({ status: res.statusCode });
  }
}

export default new ControllerCrudAnimes();
