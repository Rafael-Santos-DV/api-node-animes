import Express from 'express';
import cors from 'cors';
import Routes from './Routes/Routes';
import origin from './Middlewares/RulesOrigin';

const App = Express();
App.use(Express.json());
App.use(cors(/* { origin  } */));
App.use(Routes);

export default App;
