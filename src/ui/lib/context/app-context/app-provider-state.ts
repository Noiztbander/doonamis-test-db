import { ITvShow } from "@/core/movie-db/domain/tv-shows";

export interface IInitialAppState {
  selectedTab?: string;
  selectedMedia: ITvShow;
}

export const initialAppState: IInitialAppState = {
  selectedTab: "/",
  selectedMedia: { id: 0 },
};
