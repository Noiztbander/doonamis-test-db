"use client";

import { Component } from "react";

import { AppProvider } from "@/ui/lib/context/app-context/app-context";
import FeaturedClips from "../components/featured-clips";
import { ITvShow, ITvShowEntity } from "@/core/movie-db/domain/tv-shows";
import SectionContainer from "../../layout/templates/section-container";
import Hero from "../components/hero";
import BasicCarousel, {
  ICarouselImage,
} from "../../common/components/carousel";

interface IHomeTemplateProps {
  discoverTvShows: ITvShowEntity;
  topRatedTvShows: ITvShowEntity;
  popularTvShows: ITvShowEntity;
}

function getCarouselTvShowData(media: ITvShow[]): ICarouselImage[] {
  return media.map(({ id, name, poster_path }: ITvShow): ICarouselImage => {
    return {
      id,
      name: name as string,
      src: !!poster_path
        ? `${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${poster_path}`
        : undefined,
    };
  });
}

export default class HomeTemplate extends Component<IHomeTemplateProps> {
  constructor(props: IHomeTemplateProps) {
    super(props);
  }

  render() {
    const topRated = getCarouselTvShowData(this.props.topRatedTvShows.results);
    const popular = getCarouselTvShowData(this.props.popularTvShows.results);

    return (
      <AppProvider tvShows={this.props.discoverTvShows}>
        <main className="home_container" style={{ minHeight: "90vh" }}>
          <SectionContainer>
            <Hero />
          </SectionContainer>
          <SectionContainer>
            <BasicCarousel items={topRated} title="Top rated:" />
          </SectionContainer>
          <SectionContainer>
            <BasicCarousel items={popular} title="Popular:" />
          </SectionContainer>
          <SectionContainer>
            <FeaturedClips
              collections={this.props.discoverTvShows.results}
              title="Discover: "
            />
          </SectionContainer>
        </main>
      </AppProvider>
    );
  }
}
