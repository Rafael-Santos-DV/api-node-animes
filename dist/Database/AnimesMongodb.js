"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
var InitMongoose = function () {
    mongoose_1["default"].connect(process.env.URL_MONGODB || '', { dbName: 'Animes' }, function (error) {
        if (error) {
            throw new Error('connect error');
        }
        console.log('db on');
    });
};
exports["default"] = InitMongoose;
