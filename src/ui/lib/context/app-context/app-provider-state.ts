import { ITvShow } from "@/core/movie-db/domain/tv-shows";

export interface IInitialAppState {
  selectedTab?: string;
  selectedMedia: ITvShow;
}

export const initialTvShow: ITvShow = {
  id: 0,
  genre_ids: [],
  name: "-",
  overview: "-",
  popularity: 0,
  poster_path: undefined,
  backdrop_path: undefined,
  first_air_date: "-",
  vote_average: 0,
  vote_count: 0,
};

export const initialAppState: IInitialAppState = {
  selectedTab: "/",
  selectedMedia: initialTvShow,
};
