import { ITvShowDetail, ITvShowEntity } from "../../domain/tv-shows";

export interface ITvShowsGetter {
  getDiscover(): Promise<ITvShowEntity>;

  getTvDetail(id: string): Promise<ITvShowDetail>;
}
