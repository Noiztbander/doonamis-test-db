"use client";

import { Component } from "react";
import dynamic from "next/dynamic";

import { AppProvider } from "@/ui/lib/context/app-context/app-context";
import { ITvShowEntity } from "@/core/movie-db/domain/tv-shows";
import SectionContainer from "../../layout/templates/section-container";
import Hero from "../components/hero";
import { getCarouselTvShowData } from "../../common/components/carousel/utils";
import DetailModal from "../../common/components/detail-modal";
const BasicCarousel = dynamic(() => import("../../common/components/carousel"));
const FeaturedClips = dynamic(() => import("../components/featured-clips"));

interface IHomeTemplateProps {
  discoverTvShows: ITvShowEntity;
  topRatedTvShows: ITvShowEntity;
  popularTvShows: ITvShowEntity;
}

export default class HomeTemplate extends Component<IHomeTemplateProps> {
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
            <BasicCarousel items={topRated} title="Top rated:" showBtn={true} />
          </SectionContainer>
          <SectionContainer>
            <BasicCarousel items={popular} title="Popular:" showBtn={true} />
          </SectionContainer>
          <SectionContainer>
            <FeaturedClips
              collections={this.props.discoverTvShows.results}
              title="Discover:"
              showBtn={true}
            />
          </SectionContainer>

          <DetailModal />
        </main>
      </AppProvider>
    );
  }
}
