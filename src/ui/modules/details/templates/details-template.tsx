"use client";

import { Component } from "react";
import dynamic from "next/dynamic";

import { AppProvider } from "@/ui/lib/context/app-context/app-context";
import { ITvShowDetail, ITvShowEntity } from "@/core/movie-db/domain/tv-shows";
import SectionContainer from "../../layout/templates/section-container";
import SideBar from "../components/side-bar";
import { ICarouselImage } from "../../common/components/carousel";
const BasicCarousel = dynamic(() => import("../../common/components/carousel"));
const DetailHero = dynamic(() => import("../components/detail-hero"));
const FeaturedClips = dynamic(
  () => import("../../home/components/featured-clips")
);

import "./details-template.scss";

interface IDetailsTemplateProps {
  media: ITvShowDetail;
  relatedTvShows: ITvShowEntity;
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
                <BasicCarousel
                  items={seasonCarouselItems}
                  title="Seasons:"
                  showBtn={false}
                />

                <FeaturedClips
                  collections={this.props.relatedTvShows.results}
                  title="Related:"
                  showBtn={true}
                />
              </div>
            </div>
          </SectionContainer>
        </main>
      </AppProvider>
    );
  }
}
