"use client";

import { Component } from "react";

import { AppProvider } from "@/ui/lib/context/app-context/app-context";
import { ITvShowDetail } from "@/core/movie-db/domain/tv-shows";
import SectionContainer from "../../layout/templates/section-container";
import DetailHero from "../components/detail-hero";
import SideBar from "../components/side-bar";

import "./details-template.css";

interface IDetailsTemplateProps {
  media: ITvShowDetail;
}

export default class DetailsTemplate extends Component<IDetailsTemplateProps> {
  render() {
    return (
      <AppProvider>
        <main className="details_container" style={{ minHeight: "90vh" }}>
          <SectionContainer>
            <DetailHero media={this.props.media} />

            <div className="divider">
              <SideBar media={this.props.media} />
              <div> carrousel</div>
            </div>
          </SectionContainer>
        </main>
      </AppProvider>
    );
  }
}
