import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./Routes/Routes";
import origin from "./Middlewares/RulesOrigin";
import InitMongoose from "./Database/AnimesMongodb";

const App = Express();

InitMongoose();
App.use(Express.json());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(cors({ origin }));
App.use(Routes);

export default App;
