"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("../app"));
app_1["default"].listen(process.env.PORT || 3333, function () { return console.log("rodando na porta ".concat(process.env.PORT || 3333)); });
