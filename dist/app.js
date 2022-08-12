"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var Routes_1 = __importDefault(require("./Routes/Routes"));
var RulesOrigin_1 = __importDefault(require("./Middlewares/RulesOrigin"));
var AnimesMongodb_1 = __importDefault(require("./Database/AnimesMongodb"));
var App = (0, express_1["default"])();
(0, AnimesMongodb_1["default"])();
App.use(express_1["default"].json());
App.use(body_parser_1["default"].json());
App.use(body_parser_1["default"].urlencoded({ extended: false }));
App.use((0, cors_1["default"])({ origin: RulesOrigin_1["default"] }));
App.use(Routes_1["default"]);
exports["default"] = App;
