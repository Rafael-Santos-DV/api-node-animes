import { Router } from 'express';
import ControllersCrudAnimes from '../Controllers/ControllersCrudAnimes';

const Routes = Router();

Routes.get('/showAnimes', ControllersCrudAnimes.GetShowAnimes);
Routes.get('/showAnime/:animeId', ControllersCrudAnimes.GetShowAnime);
Routes.post('/createNewAnime', ControllersCrudAnimes.CreateNewAnimeData);

export default Routes;
