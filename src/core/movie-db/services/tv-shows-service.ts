import { TvShowsGetter } from "../application/tv-shows/tv-show-getter";
import { TvShowsRepository } from "../infrastructure/tv-shows-repository";

const tvShowRepository = new TvShowsRepository();

export const tvShowsGetter = new TvShowsGetter(tvShowRepository);
