"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var uuid_1 = require("uuid");
var yup = __importStar(require("yup"));
var Animes_1 = __importDefault(require("../Schemas/Animes"));
var ControllerCrudAnimes = /** @class */ (function () {
    function ControllerCrudAnimes() {
    }
    ControllerCrudAnimes.prototype.CreateNewAnimeData = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, anime, ano, description, likes, poster, quant, episodes, gender, episodePoster, schemaYup, newBody, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, anime = _a.anime, ano = _a.ano, description = _a.description, likes = _a.likes, poster = _a.poster, quant = _a.quant, episodes = _a.episodes, gender = _a.gender, episodePoster = _a.episodePoster;
                        schemaYup = yup.object({
                            anime: yup.string().required(),
                            ano: yup.number().required(),
                            description: yup.string().required(),
                            episodes: yup.array().required(),
                            gender: yup.array().required(),
                            poster: yup.string().required(),
                            quant: yup.number().required(),
                            likes: yup.number().required(),
                            episodePoster: yup.string().required()
                        });
                        newBody = {
                            anime: anime,
                            ano: Number(ano),
                            description: description,
                            episodes: episodes,
                            gender: gender,
                            poster: poster,
                            quant: Number(quant),
                            likes: Number(likes),
                            episodePoster: episodePoster
                        };
                        return [4 /*yield*/, schemaYup.isValid(newBody)];
                    case 1:
                        if (!(_b.sent())) {
                            return [2 /*return*/, res.status(400).json({ error: "Error on valid schema" })];
                        }
                        newBody.animeId = (0, uuid_1.v4)();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Animes_1["default"].create(newBody)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json({ sucess: "Created with sucess" })];
                    case 4:
                        err_1 = _b.sent();
                        return [2 /*return*/, res.status(404).json({ error: "Error internal server" })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ControllerCrudAnimes.prototype.GetShowAnime = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animeId, response, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        animeId = req.params.animeId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Animes_1["default"].findOne({ animeId: animeId })];
                    case 2:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, res.status(404).json({ anime: "anime not found" })];
                        }
                        return [2 /*return*/, res.json(response)];
                    case 3:
                        err_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ error: "Internal server error" })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ControllerCrudAnimes.prototype.GetShowAnimes = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Animes_1["default"].find()];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, res.status(404).json({ anime: "anime not found" })];
                        }
                        return [2 /*return*/, res.json(response)];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, res.status(400).json({ error: "Internal server error" })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ControllerCrudAnimes.prototype.Home = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, res.json()];
            });
        });
    };
    return ControllerCrudAnimes;
}());
exports["default"] = new ControllerCrudAnimes();
