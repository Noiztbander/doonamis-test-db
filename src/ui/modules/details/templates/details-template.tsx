"use client";

import { Component } from "react";

import { AppProvider } from "@/ui/lib/context/app-context/app-context";
import { ITvShowDetail, ITvShowEntity } from "@/core/movie-db/domain/tv-shows";
import SectionContainer from "../../layout/templates/section-container";
import DetailHero from "../components/detail-hero";
import SideBar from "../components/side-bar";

import "./details-template.css";
import BasicCarousel, {
  ICarouselImage,
} from "../../common/components/carousel";
import FeaturedClips from "../../home/components/featured-clips";

interface IDetailsTemplateProps {
  media: ITvShowDetail;
  discoverTvShows: ITvShowEntity;
}

export default class DetailsTemplate extends Component<IDetailsTemplateProps> {
  render() {
    const seasonCarouselItems: ICarouselImage[] =
      this.props.media?.seasons?.map(({ id, poster_path, name }) => {
        return {
          id,
          name,
          src: !!poster_path
            ? `${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${poster_path}`
            : undefined,
        };
      });

    return (
      <AppProvider>
        <main className="details_container" style={{ minHeight: "90vh" }}>
          <SectionContainer>
            <DetailHero media={this.props.media} />

            <div className="divider">
              <SideBar media={this.props.media} />
              <div className="showcase">
                <BasicCarousel items={seasonCarouselItems} title="Seasons:" />

                <FeaturedClips
                  collections={this.props.discoverTvShows.results}
                  title="Discover: "
                />
              </div>
            </div>
          </SectionContainer>
        </main>
      </AppProvider>
    );
  }
}
