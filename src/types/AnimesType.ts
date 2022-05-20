type TypeEp = {
  url: string;
  title: string;
}

export type AnimesType = {
  anime: string;
  poster: string;
  ano: number;
  animeId: string;
  quant: number;
  description: string;
  espisodes: TypeEp[];
}
