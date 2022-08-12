"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var SchemaAnime = new mongoose_1["default"].Schema({
    anime: {
        type: String,
        required: true
    },
    gender: {
        type: [String],
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    episodePoster: {
        type: String,
        required: true
    },
    animeId: {
        type: String,
        required: true,
        unique: true
    },
    quant: {
        type: Number,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    episodes: [
        {
            url: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
    ]
});
exports["default"] = mongoose_1["default"].model('animes', SchemaAnime);
