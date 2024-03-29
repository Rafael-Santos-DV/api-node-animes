import mongoose from 'mongoose';
import { AnimesType } from '../types/AnimesType';

const SchemaAnime = new mongoose.Schema<AnimesType>({
  anime: {
    type: String,
    required: true,
  },
  gender: {
    type: [String],
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  episodePoster: {
    type: String,
    required: true,
  },
  animeId: {
    type: String,
    required: true,
    unique: true,
  },
  quant: {
    type: Number,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  episodes: [
    {
      url: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model('animes', SchemaAnime);
