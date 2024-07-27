import { ITvShowDetail, ITvShowEntity } from "../../domain/tv-shows";

export interface ITvShowsGetter {
  get(): Promise<ITvShowEntity>;

  getTvDetail(id: string): Promise<ITvShowDetail>;
}
