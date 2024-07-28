"use client";

import { Component } from "react";

import { AppProvider } from "@/ui/lib/context/app-context/app-context";
import FeaturedClips from "../components/featured-clips";
import { ITvShowEntity } from "@/core/movie-db/domain/tv-shows";
import SectionContainer from "../../layout/templates/section-container";
import Hero from "../components/hero";

interface IHomeTemplateProps {
  tvShows: ITvShowEntity;
}

export default class HomeTemplate extends Component<IHomeTemplateProps> {
  constructor(props: { tvShows: ITvShowEntity }) {
    super(props);
  }

  render() {
    return (
      <AppProvider tvShows={this.props.tvShows}>
        <main className="home_container" style={{ minHeight: "90vh" }}>
          <SectionContainer>
            <Hero />
          </SectionContainer>
          <SectionContainer>
            <FeaturedClips collections={this.props.tvShows.results} />
          </SectionContainer>
        </main>
      </AppProvider>
    );
  }
}
