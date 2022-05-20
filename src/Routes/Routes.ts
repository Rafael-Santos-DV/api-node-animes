import { Router } from 'express';
import ControllersCrudAnimes from '../Controllers/ControllersCrudAnimes';

const Routes = Router();

Routes.post('/createNewAnime', ControllersCrudAnimes.CreateNewAnimeData);

export default Routes;
