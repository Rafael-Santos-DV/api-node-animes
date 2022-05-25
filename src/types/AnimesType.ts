type TypeEp = {
  url: string;
  title: string;
}

export type AnimesType = {
  anime: string;
  poster: string;
  episodePoster: string;
  likes?: number;
  gender: Array<string>;
  ano: number;
  animeId: string;
  quant: number;
  description: string;
  episodes: TypeEp[];
}
