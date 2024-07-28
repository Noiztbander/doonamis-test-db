import { TvShowsGetter } from "@/core/movie-db/application/tv-shows/tv-show-getter";
import { TvShowsRepository } from "@/core/movie-db/infrastructure/tv-shows-repository";
import DetailsTemplate from "@/ui/modules/details/templates/details-template";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: "Tv detail",
  description: "Page to see the details of a TV show",
};

export default async function TvDetails({ params }: Props) {
  const tvDetails = await new TvShowsGetter(
    new TvShowsRepository()
  ).getTvDetail(params.id);

  return <DetailsTemplate media={tvDetails} />;
}
