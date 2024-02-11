import { IMovie } from './i-movie';
import { ITvShow } from './i-tvShow';

export type IMovieTvShow = IMovie &
  ITvShow & {
    budget: number;
    imdb_id: string;
    genres: Genre[];
    belongs_to_collection: boolean;
    revenue: number;
    status: string;
    tagline: string;
    spoken_languages: {
      english_name: string;
      name: string;
      iso_639_1: string;
    }[];
    original_language: string;
    seasons: { id: number }[];
    runtime: string;
    duration: string;
  };

export type Genre = {
  id: number;
  name: string;
};

export type IMovieTvTrailer = {
  key: string;
  site: string;
  name: string;
  official: boolean;
};

export enum VideoPlayer {
  YOUTUBE = 'Youtube',
}

export type IPicture = {
  file_path: string;
  vote_average: number;
};

export type IActor = {
  name: string;
  original_name: string;
  profile_path: string;
  charachter: string;
};

export type CreditsDto = {
  cast: IActor[];
};
