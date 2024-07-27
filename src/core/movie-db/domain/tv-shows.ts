import { Keyable } from "@/core/types/Keyable";

export interface ITvShow {
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  first_air_date?: string;
  name?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface ITvShowEntity extends Keyable {
  page: number;
  results: ITvShow[];
  total_pages: number;
  total_results: number;
}
