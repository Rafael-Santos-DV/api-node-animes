"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var ControllersCrudAnimes_1 = __importDefault(require("../Controllers/ControllersCrudAnimes"));
var Routes = (0, express_1.Router)();
Routes.get('/showAnimes', ControllersCrudAnimes_1["default"].GetShowAnimes);
Routes.get('/showAnime/:animeId', ControllersCrudAnimes_1["default"].GetShowAnime);
Routes.post('/createNewAnime', ControllersCrudAnimes_1["default"].CreateNewAnimeData);
exports["default"] = Routes;
