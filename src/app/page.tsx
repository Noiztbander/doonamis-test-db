import { Metadata } from "next";

import { TvShowsGetter } from "@/core/movie-db/application/tv-shows/tv-show-getter";
import { TvShowsRepository } from "@/core/movie-db/infrastructure/tv-shows-repository";
import HomeTemplate from "@/ui/modules/home/template/home-template";

export const metadata: Metadata = {
  title: "Home",
  description: "Main home page",
};

export default async function Home() {
  const tvShows = await new TvShowsGetter(new TvShowsRepository()).get();

  return <HomeTemplate tvShows={tvShows} />;
}
