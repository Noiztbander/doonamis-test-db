import { ITvShow } from "@/core/movie-db/domain/tv-shows";
import { ICarouselImage } from ".";

export function getCarouselTvShowData(media: ITvShow[]): ICarouselImage[] {
  return media.map((item: ITvShow): ICarouselImage => {
    return {
      ...item,
      name: item.name as string,
      backdrop_path: (item.backdrop_path || item.poster_path) as string,
      src: !!item.poster_path
        ? `${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${item.poster_path}`
        : undefined,
    };
  });
}
