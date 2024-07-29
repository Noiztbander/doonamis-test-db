import { ITvShowDetail, ITvShowEntity } from "../../domain/tv-shows";

export interface ITvShowsGetter {
  getDiscover(): Promise<ITvShowEntity>;
  getTopRated(): Promise<ITvShowEntity>;
  getPopular(): Promise<ITvShowEntity>;
  getRelated(id: string): Promise<ITvShowEntity>;
  getTvDetail(id: string): Promise<ITvShowDetail>;
}
