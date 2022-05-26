import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Request, Response } from 'express';
import Animes from '../Schemas/Animes';
import { AnimesType } from '../types/AnimesType';

class ControllerCrudAnimes {
  async CreateNewAnimeData(req: Request, res: Response) {
    const {
      anime, ano, description, likes, poster, quant, episodes, gender, episodePoster,
    } = req.body as AnimesType;
    const schemaYup = yup.object({
      anime: yup.string().required(),
      ano: yup.number().required(),
      description: yup.string().required(),
      episodes: yup.array().required(),
      gender: yup.array().required(),
      poster: yup.string().required(),
      quant: yup.number().required(),
      likes: yup.number().required(),
      episodePoster: yup.string().required(),
    });

    const newBody: Record<string, any> = {
      anime,
      ano: Number(ano),
      description,
      episodes,
      gender,
      poster,
      quant: Number(quant),
      likes: Number(likes),
      episodePoster,
    };

    if (!(await schemaYup.isValid(newBody))) {
      return res.status(400).json({ error: 'Error on valid schema' });
    }
    newBody.animeId = uuidv4();

    try {
      await Animes.create(newBody);
      return res.status(200).json({ sucess: 'Created with sucess' });
    } catch (err) {
      return res.status(404).json({ error: 'Error internal server' });
    }
  }

  async GetShowAnime(req: Request, res: Response) {
    const { animeId } = req.params;

    try {
      const response = await Animes.findOne({ animeId });

      if (!response) {
        return res.status(404).json({ anime: 'anime not found' });
      }

      return res.json(response);
    } catch (err) {
      return res.status(400).json({ error: 'Internal server error' });
    }
  }

  async GetShowAnimes(req: Request, res: Response) {
    try {
      const response = await Animes.find();

      if (!response) {
        return res.status(404).json({ anime: 'anime not found' });
      }

      return res.json(response);
    } catch (err) {
      return res.status(400).json({ error: 'Internal server error' });
    }
  }
}

export default new ControllerCrudAnimes();
