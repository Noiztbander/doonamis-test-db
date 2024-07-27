import { ITvShowEntity } from "../../domain/tv-shows";

export interface ITvShowsGetter {
  get(apiKey: string): Promise<ITvShowEntity>;
}
