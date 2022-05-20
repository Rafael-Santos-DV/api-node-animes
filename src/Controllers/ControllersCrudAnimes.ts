import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Animes from '../Schemas/Animes';
import { AnimesType } from '../types/AnimesType';

class ControllerCrudAnimes {
  async CreateNewAnimeData(req: Request, res: Response) {
    const bodyData = req.body as AnimesType;
    bodyData.animeId = uuidv4();
    console.log(bodyData);

    const response = await Animes.create(bodyData);

    return res.json(response);
  }
}

export default new ControllerCrudAnimes();
