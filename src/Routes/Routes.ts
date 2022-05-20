import { Router } from 'express';
import ControllersCrudAnimes from '../Controllers/ControllersCrudAnimes';

const Routes = Router();

Routes.get('/', ControllersCrudAnimes.get);

export default Routes;
